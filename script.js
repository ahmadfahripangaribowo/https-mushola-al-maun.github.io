// script.js

// Fungsi untuk mengaktifkan tab
document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Event listener untuk setiap tombol tab
    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Hapus kelas 'active' dari semua tombol dan konten tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Tambahkan kelas 'active' ke tombol yang diklik dan konten tab terkait
            this.classList.add('active');
            const targetTab = this.getAttribute('data-tab');
            document.getElementById(targetTab).classList.add('active');
        });
    });
});

// Fungsi untuk validasi formulir kontak (opsional)
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('kontakForm');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Mencegah pengiriman formulir default

            // Validasi input
            const nama = document.getElementById('nama').value.trim();
            const email = document.getElementById('email').value.trim();
            const pesan = document.getElementById('pesan').value.trim();

            if (!nama || !email || !pesan) {
                alert('Harap lengkapi semua field!');
                return;
            }

            // Simulasi pengiriman pesan
            alert('Terima kasih! Pesan Anda telah dikirim.');
            form.reset(); // Reset formulir setelah pengiriman
        });
    }
});