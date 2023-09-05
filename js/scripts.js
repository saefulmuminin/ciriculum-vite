// Ambil elemen navbar
const navbar = document.querySelector('.navbar');

// Ambil tinggi bagian atas halaman (misalnya tinggi slider)
const topSectionHeight = document.querySelector('#top-section').offsetHeight; // Gantilah "#top-section" dengan ID dari bagian atas halaman Anda

// Tambahkan event listener ketika halaman di-scroll
window.addEventListener('scroll', () => {
  // Jika scroll lebih dari atau sama dengan tinggi bagian atas halaman, tambahkan kelas "fixed" ke navbar
  if (window.scrollY >= topSectionHeight) {
    navbar.classList.add('fixed-top');
  } else {
    // Jika scroll kembali ke bagian atas, hilangkan kelas "fixed" dari navbar
    navbar.classList.remove('fixed-top');
  }
});
