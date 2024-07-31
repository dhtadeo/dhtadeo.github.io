document.addEventListener("DOMContentLoaded", function() {
    fetch('res/nexaidynasty_data.json') //
        .then(response => response.json())
        .then(data => {
            generateTable(data);
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));

    function generateTable(data) {
        const container = document.getElementById('table-container');
        const table = document.createElement('table');
        table.className = 'responsive-table';

        // Create table header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        Object.keys(data[0]).forEach(key => {
            const th = document.createElement('th');
            th.textContent = key;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Create table body
        const tbody = document.createElement('tbody');
        data.forEach(item => {
            const row = document.createElement('tr');
            Object.values(item).forEach(value => {
                const td = document.createElement('td');
                td.textContent = value;
                td.setAttribute('data-label', Object.keys(item)[Object.values(item).indexOf(value)]);
                row.appendChild(td);
            });
            tbody.appendChild(row);
        });
        table.appendChild(tbody);

        container.appendChild(table);
    }
});