# Skor Headset: prototype

Tujuan satu-satunya: **membuktikan tombol media headset Bluetooth (Next / Prev / Play-Pause) bisa ditangkap browser di HP** (Android Chrome & iOS Safari). Skornya cuma alat peraga.

| File | Isi |
|---|---|
| `index.html` | App utuh (HTML + CSS + vanilla JS, tanpa build) |
| `test.html` | Unit test logika skor (rally scoring, target, deuce, undo). Mengambil `<script id="logic">` langsung dari `index.html` |

Pemetaan: **Next** = Tim A +1 · **Prev** = Tim B +1. **Tombol headset lain (Play/Pause, dll.) diabaikan**, cuma dicatat di panel Debug. Undo lewat tombol di layar.

Mode:
- **Pickleball**: rally scoring seperti badminton (setiap rally = poin, tanpa aturan servis). Target 11 / 15 / 21, menang selisih 2.
- **Simple**: hitung bebas tanpa target.
Di laptop: `→` = A, `←` = B, `Backspace` = Undo (plus tombol Next/Prev di keyboard media).

## Cara menjalankan (butuh HTTPS)

Media Session & Wake Lock hanya jalan di *secure context*. `http://192.168.x.x` dari HP **tidak** termasuk.

### Opsi 1: GitHub Pages (paling cepat, tanpa tunnel)
Repo ini sudah GitHub Pages dengan custom domain. Setelah folder `skor/` masuk ke `main`, buka:

```
https://ptbi-kalbar.teknomaven.com/skor/
https://ptbi-kalbar.teknomaven.com/skor/test.html
```
Catatan: URL ini publik.

### Opsi 2: Lokal + tunnel
```bash
cd skor
npx serve -l 3000 .                              # http://localhost:3000 (desktop: localhost dianggap secure)

# terminal lain, pilih salah satu:
npx cloudflared tunnel --url http://localhost:3000   # → https://xxxx.trycloudflare.com
ngrok http 3000                                      # → https://xxxx.ngrok-free.app
```
Buka URL `https://…` itu di HP. (Di ngrok gratis ada halaman peringatan sekali klik, itu normal.)

`test.html` harus dibuka lewat server (bukan `file://`) karena memakai `fetch('index.html')`.

## Cara kerja singkat
1. Tombol **MULAI** (user gesture) memutar `<audio loop>` berisi WAV 10 detik, 100 Hz, ≈ −64 dBFS, yang dibuat di JS. Tidak terdengar, tapi *bukan* digital silence, supaya OS/headset tidak menganggap sesi media idle.
2. Karena halaman sedang "memutar media", OS meneruskan perintah AVRCP dari headset ke `navigator.mediaSession`.
3. Handler `play`/`pause` tetap didaftarkan tapi **tidak melakukan aksi**: cuma memastikan audio terus jalan. Kalau handler-nya dilepas, browser akan mem-pause audio saat Play/Pause ditekan, lalu Next/Prev ikut berhenti diterima.
4. Judul `MediaMetadata` = skor saat ini, jadi skor terlihat di lock screen / notifikasi media.
5. Setiap aksi dibacakan pakai `speechSynthesis` (id-ID, fallback en-US). Setelah TTS selesai, audio dicek dan di-`play()` ulang bila berhenti. Ada watchdog tiap 3 detik juga.
6. State + history (100 langkah) disimpan di `localStorage` setiap perubahan. Setelah reload muncul tombol **LANJUTKAN**, karena audio butuh gesture lagi.

**Panel Debug** (bawah layar) = bukti utama. Setiap event tercatat dengan sumber (`mediaSession` / `keydown` / `layar` / `audio` / `sys`) dan timestamp, termasuk tombol yang **tidak dipetakan** dan event yang kena debounce.

## Checklist uji manual di HP

Siapkan: headset BT sudah pair, tutup Spotify/YouTube/app musik lain. Untuk tiap baris, tekan Next, Prev, Play/Pause, lalu catat hasilnya dari panel Debug.

| # | Skenario | Next | Prev | Play/Pause | Catatan |
|---|---|---|---|---|---|
| 1 | Layar menyala, app di depan | ☐ | ☐ | ☐ | Log harus `mediaSession nexttrack → A` dst. Play/Pause: skor tidak berubah, audio tetap ✓, Next/Prev masih jalan sesudahnya |
| 2 | Tekan cepat 2× (cek debounce) | ☐ | ☐ | ☐ | Tekanan ke-2 dalam 300 ms → `(debounce, diabaikan)` |
| 3 | **Layar terkunci** | ☐ | ☐ | ☐ | Skor di lock screen ikut berubah? TTS bersuara? |
| 4 | **Setelah TTS bicara** (tekan beruntun, tunggu suara selesai, tekan lagi) | ☐ | ☐ | ☐ | Chip "Audio aktif ✓" tetap hijau? |
| 5 | Layar terkunci + setelah TTS | ☐ | ☐ | ☐ | Skenario paling rawan, lihat Known issues |
| 6 | **Headset dimatikan → dinyalakan (reconnect)** | ☐ | ☐ | ☐ | Kalau mati: ketuk chip Audio lalu coba lagi |
| 7 | Pindah ke app lain lalu kembali | ☐ | ☐ | ☐ | Wake lock ✓ lagi setelah kembali? |
| 8 | Reload halaman → LANJUTKAN | ☐ | ☐ | ☐ | Skor & undo history pulih? |
| 9 | Biarkan 5 menit tanpa sentuh | ☐ | ☐ | ☐ | Layar tetap menyala (wake lock)? Audio masih jalan? |
| 10 | Mainkan 1 game pickleball penuh sampai 11 (termasuk deuce 10-10) | ☐ | ☐ | ☐ | Menang baru diumumkan saat selisih 2 |

Isi juga: model HP, versi OS, browser + versi, merek/model headset. Hasilnya sangat bergantung perangkat.

## Known issues: iOS vs Android

### iOS (Safari / semua browser iOS = WebKit)
- **Risiko terbesar: TTS vs audio session.** `speechSynthesis` bisa mengambil alih audio session lalu mem-pause `<audio>`. App akan `play()` ulang setelah ucapan selesai, tapi saat layar terkunci iOS bisa menolak `play()` tanpa gesture. Akibatnya headset berhenti mengontrol halaman sampai HP dibuka. Cek baris 4 & 5 di checklist.
- TTS sering **tidak bersuara saat layar terkunci / Safari di background**. Skor di lock screen (metadata) jadi cadangannya.
- AirPods: tekan 1× = play/pause, 2× = next, 3× = prev. Kalau double-tap diatur ke Siri, ubah dulu di Settings → Bluetooth → AirPods.
- Lock screen bisa menampilkan tombol ±10 detik (seek), bukan next/prev. App ini sengaja **tidak** mendaftarkan `seekforward/seekbackward` supaya iOS menampilkan next/prev.
- Wake Lock butuh iOS 16.4+. Mode "Add to Home Screen" di versi iOS lama punya bug wake lock.
- Setelah reload/kill tab, audio wajib dimulai ulang dengan tap (LANJUTKAN / chip Audio).

### Android (Chrome)
- Chrome hanya membuat sesi media (notifikasi + tombol headset) kalau media **≥ 5 detik dan tidak muted**. Itu alasan loop 10 detik dan amplitudo tidak nol. Jangan ubah jadi `muted` atau `volume = 0`.
- **Tekan lama play/pause** sering memicu Google Assistant, bukan event ke browser.
- App media lain (Spotify, YouTube, podcast) bisa "merebut" tombol headset. Yang terakhir memutar biasanya yang menang.
- TTS Google mengambil audio focus. Chrome bisa mem-pause `<audio>`, lalu app me-resume otomatis (terlihat di log `audio`).
- Samsung Internet / Firefox Android perilakunya beda. Target prototype: Chrome.
- Penghemat baterai agresif (Xiaomi, Oppo, dll.) bisa membunuh tab di background walau audio jalan.

### Keduanya
- Setelah headset reconnect, OS mengirim tombol ke sesi media *terakhir yang aktif*. Kalau di sela itu ada app lain yang memutar suara, ketuk chip Audio.
- Sebagian headset mematikan stream saat hening total. Itu sebabnya sinyalnya dibuat sangat kecil tapi tidak nol.
- Play/Pause diabaikan, tapi di beberapa HP tekanan itu tetap bisa mem-pause audio sesaat sebelum app me-resume. Kalau Next/Prev mati setelah menekan Play/Pause, lihat log `audio` dan laporkan model HP-nya.
- Headset yang mengirim tombol sebagai keyboard event (bukan AVRCP) akan muncul di log sebagai `keydown <nama tombol> (tidak dipetakan)`. Tinggal tambahkan ke `KEYMAP`.
