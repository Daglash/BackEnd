const socket = io();
const messagesContainer = document.getElementById("messagesContainer");
const $tableProducts = document.querySelector('#table-products');

const renderProducts = products => {
	if (products.length > 0) {
		$tableProducts.innerHTML = '';
		products.forEach(product => {
			$tableProducts.innerHTML += `
		<tr class="text-center">
			<td class="align-middle">${product.name}</td>
			<td class="align-middle">${product.price}</td>
			<td class="align-middle">
				<img src="${product.img}" alt="${product.name}" width="100px">
			</td>
		</tr>`;
		});
	} else {
		$noProducts.style.display = 'block';
	}
}



const addMessage = (e) => {
	let date = new Date().toLocaleDateString() + " " + new Date().toTimeString();
  
	const message = {
	  author: {
		email: document.getElementById("email").value,
		name: document.getElementById("name").value,
		lastName: document.getElementById("lastName").value,
		age: document.getElementById("age").value,
		alias: document.getElementById("alias").value,
		avatar: document.getElementById("avatar").value,
	  },
	  message: document.getElementById("message").value,
	};
  
	const normalizedMessage = normalizeMessages(message);
  
	socket.emit("new-message", normalizedMessage);
  
	document.getElementById("message").value = " ";
	return false;
  };
  
  const renderMessages = (messages) => {
	const desnormalizedMessages = desnormalizeChatMessages(messages);
	const messagesHTML = desnormalizedMessages
	  .map((message) => {
		return `
		  <div>
			<span class="message__email">${message.author.alias}</span>:
			<span class="message__date">[${message.date}]<span>
			<br>
			<p class="message__text">${message.message}</p>
		  </div>
		  `;
	  })
	  .join(" ");
	document.getElementById("chat__messagesContainer").innerHTML = messagesHTML;
  };
  

  socket.on('products', products => {
	renderProducts(products);
});

socket.on("messagesFromServer", (messages) => {
	renderMessages(messages);
  });
  