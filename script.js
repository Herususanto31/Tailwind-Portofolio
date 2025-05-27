/**
 * absolute top-14 w-full left-0 bg-slate-800 divide-gray-900 divide-y-2
 */
// Ambil elemen menu utama
const menu = document.querySelector('.menu');
// Ambil elemen tombol hamburger menu
const hamburgerMenu = document.querySelector('.hamburger-menu');

// Pasang event listener klik pada menu dan hamburger menu, untuk toggle tampilan menu
menu.addEventListener('click', displayMenu);
hamburgerMenu.addEventListener('click', displayMenu);

// Ambil elemen ikon bars (menu terbuka)
const iconBars = document.querySelector('.fa-bars');
// Ambil elemen ikon close (menu tertutup)
const iconClose = document.querySelector('.fa-xmark');

// Fungsi untuk toggle menu tampil atau sembunyi
function displayMenu() {
    if (menu.classList.contains('absolute')) { // Jika menu sedang terbuka (ditandai dengan kelas 'absolute')
        menu.classList.add('hidden'); // Sembunyikan menu
        iconBars.style.display = 'inline'; // Tampilkan ikon bars (menu terbuka)
        iconClose.style.display = 'none'; // Sembunyikan ikon close (menu tertutup)

        // Hapus kelas styling posisi dan tampilan menu agar menu hilang
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

        // Tambah kelas styling posisi dan tampilan menu agar menu muncul dengan style yang tepat
        menu.classList.add('absolute');
        menu.classList.add('top-14');
        menu.classList.add('w-full');
        menu.classList.add('left-0');
        menu.classList.add('bg-slate-800');
        menu.classList.add('divide-gray-900');
        menu.classList.add('divide-y-2');
    }
}


document.addEventListener("DOMContentLoaded", function () {
  // === MENU NAVIGASI ===
  // Ambil elemen menu dan tombol hamburger untuk navigasi responsif
  const menu = document.querySelector('.menu');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const iconBars = document.querySelector('.fa-bars'); // Ikon menu bars
  const iconClose = document.querySelector('.fa-xmark'); // Ikon close menu

  // Pasang event klik pada hamburger menu untuk toggle menu
  hamburgerMenu.addEventListener('click', function () {
    const isOpen = !menu.classList.contains('hidden'); // Cek apakah menu saat ini terbuka

    menu.classList.toggle('hidden'); // Toggle sembunyikan/tampilkan menu
    iconBars.classList.toggle('hidden'); // Toggle ikon bars
    iconClose.classList.toggle('hidden'); // Toggle ikon close

    if (!isOpen) {
      // Jika menu akan dibuka, tambahkan kelas styling posisi dan tampilan menu
      menu.classList.add('absolute', 'top-14', 'w-full', 'left-0', 'bg-slate-800', 'divide-gray-900', 'divide-y-2');
    } else {
      // Jika menu akan ditutup, hapus kelas styling tersebut
      menu.classList.remove('absolute', 'top-14', 'w-full', 'left-0', 'bg-slate-800', 'divide-gray-900', 'divide-y-2');
    }
  });

  // === MODAL LOGO GALERI ===
  // Ambil elemen link yang memicu modal logo
  const logoModalTrigger = document.querySelector('a[href="#modal-logo"]');
  if (logoModalTrigger) {
    // Pasang event klik untuk menampilkan modal logo
    logoModalTrigger.addEventListener("click", function (event) {
      event.preventDefault(); // Cegah aksi default link
      document.getElementById('modal-logo').style.display = "flex"; // Tampilkan modal logo
    });
  }

  // Pasang event klik pada setiap gambar di modal-logo untuk membuka preview gambar
  document.querySelectorAll('#modal-logo img').forEach(function (img) {
    img.addEventListener("click", function () {
      const src = img.getAttribute("src"); // Ambil alamat gambar yang diklik
      document.getElementById("preview-image").setAttribute("src", src); // Set gambar preview dengan src yang diambil
      document.getElementById("image-preview-modal").style.display = "flex"; // Tampilkan modal preview gambar
    });
  });

  // === MODAL LOGO4 (TAMBAHAN) ===
  // Ambil trigger modal logo4
  const logo4ModalTrigger = document.querySelector('a[href="#modal-logo4"]');
  if (logo4ModalTrigger) {
    logo4ModalTrigger.addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById('modal-logo4').style.display = "flex"; // Tampilkan modal logo4
    });
  }

  // === MODAL POSTER GALERI ===
  // Ambil trigger modal poster
  const posterModalTrigger = document.querySelector('a[href="#modal-poster"]');
  if (posterModalTrigger) {
    posterModalTrigger.addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById('modal-poster').style.display = "flex"; // Tampilkan modal poster
    });
  }

  // Pasang event klik pada setiap gambar poster di modal poster untuk membuka preview
  document.querySelectorAll('#modal-poster .poster-img').forEach(function (img) {
    img.addEventListener("click", function () {
      const src = img.getAttribute("src"); // Ambil src gambar poster yang diklik
      const previewModal = document.getElementById("preview-poster-modal"); // Modal preview poster
      const previewImg = document.getElementById("preview-poster-img"); // Gambar di modal preview poster
      previewImg.setAttribute("src", src); // Set gambar preview
      previewModal.style.display = "flex"; // Tampilkan modal preview poster
    });
  });

  // === MODAL PAMFLET ===
  // Ambil trigger modal pamflet
  const pamfletModalTrigger = document.querySelector('a[href="#modal-Pamflet"]');
  if (pamfletModalTrigger) {
    pamfletModalTrigger.addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById('modal-Pamflet').style.display = "flex"; // Tampilkan modal pamflet
    });
  }

  // Pasang event klik pada gambar pamflet untuk membuka preview menggunakan kelas .pamflet-img
  document.querySelectorAll(".pamflet-img").forEach(img => {
    img.addEventListener("click", () => {
      const src = img.getAttribute("src"); // Ambil src gambar pamflet
      const previewModal = document.getElementById("preview-poster-modal"); // Modal preview poster (dipakai ulang untuk pamflet)
      const previewImg = document.getElementById("preview-poster-img"); // Gambar preview
      previewImg.setAttribute("src", src); // Set gambar preview
      previewModal.style.display = "flex"; // Tampilkan modal preview
    });
  });

  // === CLOSE BUTTON PREVIEW POSTER MODAL ===
  // Ambil tombol close pada preview poster modal
  const closePreviewBtn = document.getElementById("close-preview-poster");
  const previewModal = document.getElementById("preview-poster-modal");
  const previewImg = document.getElementById("preview-poster-img");

  if (closePreviewBtn && previewModal) {
    // Pasang event klik tombol close untuk menutup preview poster
    closePreviewBtn.addEventListener("click", () => {
      previewModal.style.display = "none"; // Sembunyikan modal preview
      previewImg.setAttribute("src", ""); // Hapus src gambar preview agar tidak tertinggal
    });

    // Jika user klik di area background modal (bukan gambar), juga tutup modal preview
    previewModal.addEventListener("click", (e) => {
      if (e.target === previewModal) {
        previewModal.style.display = "none";
        previewImg.setAttribute("src", "");
      }
    });
  }

  // === MODAL GAMBAR PREVIEW (LOGO) ===
  // Ambil tombol close untuk modal preview logo
  const closePreview = document.querySelector("#image-preview-modal button");
  const imagePreviewModal = document.getElementById("image-preview-modal");

  if (closePreview && imagePreviewModal) {
    // Pasang event klik untuk tombol close modal preview logo
    closePreview.addEventListener("click", function () {
      imagePreviewModal.style.display = "none"; // Sembunyikan modal preview logo
    });

    // Jika klik area background modal preview logo, tutup modal
    imagePreviewModal.addEventListener("click", function (event) {
      if (event.target === imagePreviewModal) {
        imagePreviewModal.style.display = "none";
      }
    });
  }

  // === MODAL SERTIFIKAT ===
  // Ambil semua gambar sertifikat
  const sertifikatImages = document.querySelectorAll(".sertifikat-img");
  // Ambil modal sertifikat dan gambar modal sertifikat
  const sertifikatModal = document.querySelector("#modal");
  const sertifikatModalImg = document.querySelector("#modal-img");
  // Ambil tombol close modal sertifikat
  const closeModal = document.querySelector("#close-modal");

  // Pasang event klik pada setiap gambar sertifikat untuk membuka modal sertifikat
  sertifikatImages.forEach((img) => {
    img.addEventListener("click", function () {
      sertifikatModal.classList.remove("hidden"); // Tampilkan modal sertifikat
      sertifikatModalImg.src = this.src; // Set src gambar modal sertifikat sesuai gambar yang diklik
    });
  });

  // Pasang event klik tombol close modal sertifikat
  closeModal.addEventListener("click", function () {
    sertifikatModal.classList.add("hidden"); // Sembunyikan modal sertifikat
  });

  // Jika klik di background modal sertifikat, tutup modal
  sertifikatModal.addEventListener("click", function (event) {
    if (event.target === sertifikatModal) {
      sertifikatModal.classList.add("hidden");
    }
  });
});
