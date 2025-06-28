/**
 * absolute top-14 w-full left-0 bg-slate-800 divide-gray-900 divide-y-2
 */

// Ambil elemen menu utama
const menu = document.querySelector('.menu'); // Menu navigasi

// Ambil elemen tombol hamburger menu
const hamburgerMenu = document.querySelector('.hamburger-menu'); // Tombol hamburger

// Pasang event listener klik pada menu dan hamburger menu
menu.addEventListener('click', displayMenu); // Saat menu diklik, jalankan fungsi displayMenu
hamburgerMenu.addEventListener('click', displayMenu); // Saat hamburger diklik, jalankan fungsi displayMenu

// Ambil elemen ikon bars (menu terbuka)
const iconBars = document.querySelector('.fa-bars'); // Ikon garis tiga

// Ambil elemen ikon close (menu tertutup)
const iconClose = document.querySelector('.fa-xmark'); // Ikon silang

// Fungsi untuk menampilkan/sembunyikan menu
function displayMenu() {
    if (menu.classList.contains('absolute')) { // Cek apakah menu sedang terbuka
        menu.classList.add('hidden'); // Sembunyikan menu
        iconBars.style.display = 'inline'; // Tampilkan ikon bars
        iconClose.style.display = 'none'; // Sembunyikan ikon close

        // Hapus kelas-kelas style agar menu tertutup
        menu.classList.remove('absolute');
        menu.classList.remove('top-14');
        menu.classList.remove('w-full');
        menu.classList.remove('left-0');
        menu.classList.remove('bg-slate-800');
        menu.classList.remove('divide-gray-900');
        menu.classList.remove('divide-y-2');
    } else {
        menu.classList.remove('hidden'); // Tampilkan menu
        iconBars.style.display = 'none'; // Sembunyikan ikon bars
        iconClose.style.display = 'inline'; // Tampilkan ikon close

        // Tambahkan kelas-kelas style agar menu muncul
        menu.classList.add('absolute');
        menu.classList.add('top-14');
        menu.classList.add('w-full');
        menu.classList.add('left-0');
        menu.classList.add('bg-slate-800');
        menu.classList.add('divide-gray-900');
        menu.classList.add('divide-y-2');
    }
}

// Tunggu dokumen dimuat sepenuhnya
document.addEventListener("DOMContentLoaded", function () {
  // === MENU NAVIGASI ===
  const menu = document.querySelector('.menu'); // Menu utama
  const hamburgerMenu = document.querySelector('.hamburger-menu'); // Tombol hamburger
  const iconBars = document.querySelector('.fa-bars'); // Ikon garis tiga
  const iconClose = document.querySelector('.fa-xmark'); // Ikon silang

  // Toggle menu saat hamburger diklik
  hamburgerMenu.addEventListener('click', function () {
    const isOpen = !menu.classList.contains('hidden'); // Cek apakah menu sedang terbuka

    menu.classList.toggle('hidden'); // Sembunyikan/tampilkan menu
    iconBars.classList.toggle('hidden'); // Toggle ikon bars
    iconClose.classList.toggle('hidden'); // Toggle ikon close

    if (!isOpen) {
      // Tambahkan style menu saat dibuka
      menu.classList.add('absolute', 'top-14', 'w-full', 'left-0', 'bg-slate-800', 'divide-gray-900', 'divide-y-2');
    } else {
      // Hapus style menu saat ditutup
      menu.classList.remove('absolute', 'top-14', 'w-full', 'left-0', 'bg-slate-800', 'divide-gray-900', 'divide-y-2');
    }
  });

  // === MODAL LOGO GALERI ===
  const logoModalTrigger = document.querySelector('a[href="#modal-logo"]'); // Trigger modal logo
  if (logoModalTrigger) {
    logoModalTrigger.addEventListener("click", function (event) {
      event.preventDefault(); // Mencegah link default
      document.getElementById('modal-logo').style.display = "flex"; // Tampilkan modal logo
    });
  }

  // Preview gambar saat diklik di modal-logo
  document.querySelectorAll('#modal-logo img').forEach(function (img) {
    img.addEventListener("click", function () {
      const src = img.getAttribute("src"); // Ambil src gambar
      document.getElementById("preview-image").setAttribute("src", src); // Set gambar di modal preview
      document.getElementById("image-preview-modal").style.display = "flex"; // Tampilkan modal preview
    });
  });

  // === MODAL LOGO4 (TAMBAHAN) ===
  const logo4ModalTrigger = document.querySelector('a[href="#modal-logo4"]'); // Trigger modal logo4
  if (logo4ModalTrigger) {
    logo4ModalTrigger.addEventListener("click", function (event) {
      event.preventDefault(); // Cegah aksi default
      document.getElementById('modal-logo4').style.display = "flex"; // Tampilkan modal logo4
    });
  }

  // === MODAL POSTER GALERI ===
  const posterModalTrigger = document.querySelector('a[href="#modal-poster"]'); // Trigger modal poster
  if (posterModalTrigger) {
    posterModalTrigger.addEventListener("click", function (event) {
      event.preventDefault(); // Cegah aksi default
      document.getElementById('modal-poster').style.display = "flex"; // Tampilkan modal poster
    });
  }

  // Preview gambar poster
  document.querySelectorAll('#modal-poster .poster-img').forEach(function (img) {
    img.addEventListener("click", function () {
      const src = img.getAttribute("src"); // Ambil src gambar
      const previewModal = document.getElementById("preview-poster-modal"); // Modal preview
      const previewImg = document.getElementById("preview-poster-img"); // Gambar di modal
      previewImg.setAttribute("src", src); // Set src
      previewModal.style.display = "flex"; // Tampilkan modal
    });
  });

  // === MODAL PAMFLET ===
  const pamfletModalTrigger = document.querySelector('a[href="#modal-Pamflet"]'); // Trigger modal pamflet
  if (pamfletModalTrigger) {
    pamfletModalTrigger.addEventListener("click", function (event) {
      event.preventDefault(); // Cegah aksi default
      document.getElementById('modal-Pamflet').style.display = "flex"; // Tampilkan modal pamflet
    });
  }

  // Preview gambar pamflet
  document.querySelectorAll(".pamflet-img").forEach(img => {
    img.addEventListener("click", () => {
      const src = img.getAttribute("src"); // Ambil src gambar
      const previewModal = document.getElementById("preview-poster-modal"); // Gunakan modal yang sama
      const previewImg = document.getElementById("preview-poster-img");
      previewImg.setAttribute("src", src); // Set src preview
      previewModal.style.display = "flex"; // Tampilkan modal
    });
  });``

  // === CLOSE BUTTON PREVIEW POSTER MODAL ===
  const closePreviewBtn = document.getElementById("close-preview-poster"); // Tombol close
  const previewModal = document.getElementById("preview-poster-modal"); // Modal preview
  const previewImg = document.getElementById("preview-poster-img"); // Gambar dalam modal

  if (closePreviewBtn && previewModal) {
    closePreviewBtn.addEventListener("click", () => {
      previewModal.style.display = "none"; // Sembunyikan modal
      previewImg.setAttribute("src", ""); // Hapus src gambar
    });

    previewModal.addEventListener("click", (e) => {
      if (e.target === previewModal) { // Klik di luar gambar
        previewModal.style.display = "none";
        previewImg.setAttribute("src", "");
      }
    });
  }

  // === MODAL GAMBAR PREVIEW (LOGO) ===
  const closePreview = document.querySelector("#image-preview-modal button"); // Tombol close modal logo
  const imagePreviewModal = document.getElementById("image-preview-modal"); // Modal logo preview

  if (closePreview && imagePreviewModal) {
    closePreview.addEventListener("click", function () {
      imagePreviewModal.style.display = "none"; // Sembunyikan modal logo
    });

    imagePreviewModal.addEventListener("click", function (event) {
      if (event.target === imagePreviewModal) { // Klik di luar gambar
        imagePreviewModal.style.display = "none";
      }
    });
  }
});
