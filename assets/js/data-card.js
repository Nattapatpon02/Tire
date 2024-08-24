// ฟังก์ชันเพื่อเติมข้อมูลในการ์ด
function populateCards(data) {
    const container = document.getElementById('card-container');

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        // สร้างเนื้อหาของการ์ด
        const pic = document.createElement('div');
        pic.className = 'pic';
        pic.innerHTML = `<img src="${item.pic}" alt="${item.name}">`; // แทรกรูปภาพ

        const name = document.createElement('div');
        name.className = 'store-name';
        name.innerHTML = item.name;

        const phone = document.createElement('div');
        phone.className = 'phone';
        phone.innerHTML = `เบอร์ติดต่อ: ${item.phone}`;

        const price = document.createElement('div');
        price.className = 'price';
        price.innerHTML = `ราคาค้างปี:<br>${item.ราคาค้างปี}<br>ราคามือสอง:<br>${item.ราคามือสอง}`;

        // เพิ่มเนื้อหาในการ์ด
        card.appendChild(pic);
        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(price);

        // เพิ่มการ์ดในคอนเทนเนอร์
        container.appendChild(card);
    });
}

// โหลดข้อมูลจากไฟล์ JSON
fetch('../assets/data/data-card.json') // ใช้พาธที่ถูกต้องตามโครงสร้างที่ให้มา
    .then(response => response.json())
    .then(data => populateCards(data))
    .catch(error => console.error('Error loading data:', error));