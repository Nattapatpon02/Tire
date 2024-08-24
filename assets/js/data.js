// ฟังก์ชันเพื่อเติมข้อมูลในตาราง
function populateTable(data) {
    const tableBody = document.getElementById('data-table').getElementsByTagName('tbody')[0];

    data.forEach(item => {
        const row = document.createElement('tr');

        Object.values(item).forEach(text => {
            const cell = document.createElement('td');
            cell.innerHTML = text; // ใช้ innerHTML เพื่อให้แสดง HTML ที่ฝังอยู่ได้
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
}

// โหลดข้อมูลจากไฟล์ JSON
fetch('../assets/data/data.json') // ใช้พาธที่ถูกต้องตามโครงสร้างที่ให้มา
    .then(response => response.json())
    .then(data => populateTable(data))
    .catch(error => console.error('Error loading data:', error));
