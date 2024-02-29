//toggle class active
const headerExtra = document.querySelector('.header-extra');
headerExtra.classList.remove('active');

//Pada saat buregr menu di click
//di tambahin event event) => {
    // event.preventDefault() biar ga ke atas pas di klik hamburgeernya
document.querySelector('#hamburger').onclick = (event) => {
    event.preventDefault(); // Mencegah perilaku default dari link
    headerExtra.classList.toggle('active');
}; 

//clik di luar sidbar biar ga muncul side bar
const burger = document.querySelector ('hamburger');

document.addEventListener('click',function(e) {
    
    if(!hamburger.contains(e.target) &&!headerExtra.contains(e.target)) {
        headerExtra.classList.remove('active');
    }
    
});


    // Tangani submit form
    document.getElementById('massageForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman form

        // Ambil nilai dari input form
        const name = document.getElementById('name').value;
        const birthdate = document.getElementById('birthdate').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const message = document.getElementById('message').value;
         
        if (message.length > 400) {
            alert('Pesan tidak boleh melebihi 100 karakter!');
            return;
        }

        // Buat elemen baris baru untuk tabel hasil
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${birthdate}</td>
            <td>${gender}</td>
            <td>${message}</td>
        `;

        // Masukkan baris baru ke dalam tabel hasil
        document.getElementById('resultBody').appendChild(newRow);

        // Bersihkan nilai input form setelah submit
        document.getElementById('name').value = '';
        document.getElementById('birthdate').value = '';
        document.querySelector('input[name="gender"]:checked').checked = false;
        document.getElementById('message').value = '';

        // Tampilkan waktu saat ini
        displayCurrentTime();
    });

    // Fungsi untuk mendapatkan waktu saat ini dan menampilkannya
    function displayCurrentTime() {
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
        document.getElementById('current-time').innerHTML = 'Waktu Saat Ini: ' + formattedTime;
    }


