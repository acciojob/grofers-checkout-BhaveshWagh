const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll('.price');
    let total = 0;

    // Iterate over the NodeList and sum up the prices
    prices.forEach(priceElement => {
        total += parseFloat(priceElement.textContent);
    });

    // Create a new row
    const totalRow = document.createElement('tr');
    const totalCell = document.createElement('td');

    // Set the colspan attribute to span across the entire table width
    totalCell.setAttribute('colspan', 2);
    totalCell.textContent = 'Total Price: ' + total;

    // Append the cell to the row
    totalRow.appendChild(totalCell);

    // Append the row to the table
    document.querySelector('table').appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

