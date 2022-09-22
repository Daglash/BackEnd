const socket = io();

document.getElementById("chat").style.background =
  "  #white";

socket.on("msg_back", (data) => {
  render(data);
});

socket.on("data_ready", (data) => {
  render2(data);
});

const render = (data) => {
  let content = data

    .map((item) => {
      // prettier-ignore
      return `<p> <strong>${item.name} at </strong> <span style="color:brown;">[${new Date().toLocaleString()}]</span> : ${item.msg} `;
    })
    .join(" ");

  document.querySelector("#chat").innerHTML = content;
};

const render2 = (data) => {
  let content = data
    .map((item) => {
      // prettier-ignore
      return `
      <tr>
        <td>${item.title}</td>
        <td>${item.price}</td>
        <td> <img src=${item.thumbnail} alt=${item.title} width="100" height="100"/> </td>
      </tr>`;
    })
    .join(" ");

  document.querySelector("#tabla").innerHTML = content;
};

const addMsg = () => {
  let info = {
    name: document.querySelector("#inpname").value,
    msg: document.querySelector("#inpmsg").value,
  };

  socket.emit("data_client", info);

  document.querySelector("#inpmsg").value = "";
  document.querySelector("#inpname").disabled = true;

  return false;
};
const anotherName = () => {
  let info = {
    title: document.querySelector("#inputName").value,
    price: document.querySelector("#inputPrice").value,
    thumbnail: document.querySelector("#inputThumb").value,
  };

  socket.emit("data_array", info);

  return false;
};





// -----------------------------------------------------




// const socket = io();

// // Products form
// const $formAddProduct = document.querySelector('#form-add-product');
// const $listProducts = document.querySelector('#list-products');
// const $nameInput = document.querySelector('#name-product');
// const $priceInput = document.querySelector('#price-product');
// const $imgInput = document.querySelector('#img-product');
// const $tableProducts = document.querySelector('#table-products');
// const $sectionProduct = document.querySelector('#section-products');
// const $noProducts = document.querySelector('#no-products');

// $formAddProduct.addEventListener('submit', e => {
// 	e.preventDefault();
// 	const product = {
// 		name: $nameInput.value,
// 		price: $priceInput.value,
// 		img: $imgInput.value
// 	};
// 	socket.emit('product', product);
// 	e.target.reset();
// });

// const renderProducts = products => {
// 	if (products.length > 0) {
// 		$noProducts.style.display = 'none';
// 		$tableProducts.innerHTML = '';
// 		products.forEach(product => {
// 			$tableProducts.innerHTML += `
// 		<tr class="text-center">
// 			<td class="align-middle">${product.name}</td>
// 			<td class="align-middle">${product.price}</td>
// 			<td class="align-middle">
// 				<img src="${product.img}" alt="${product.name}" width="100px">
// 			</td>
// 		</tr>`;
// 		});
// 	} else {
// 		$noProducts.style.display = 'block';
// 	}
// }

// // Chat form
// const $chatForm = document.querySelector('#chat-form');
// const $userEmail = document.querySelector('#user-email');
// const $chatMessage = document.querySelector('#chat-message');
// const $tableChat = document.querySelector('#table-chat');

// $chatForm.addEventListener('submit', e => {
// 	e.preventDefault();
// 	if ($userEmail.value == '') return alert('Ingresa tu email');
// 	const message = {
// 		email: $userEmail.value,
// 		message: $chatMessage.value,
// 		date: new Date().toLocaleString()
// 	}
// 	socket.emit('message', message);
// 	e.target.reset();
// });

// const renderChat = messages => {
// 	if (messages.length > 0) {
// 		$tableChat.innerHTML = '';
// 		messages.forEach(message => {
// 			$tableChat.innerHTML += `
// 		<div>
// 			<b class="text-primary">${message.email}</b>
// 			[<span style="color: brown;">${message.date}</span>]
// 			: <i class="text-success">${message.message}</i>
// 		</div > `;
// 		})
// 		$chatMessage.focus();
// 	}
// }

// socket.on('products', products => {
// 	renderProducts(products);
// });

// socket.on('messages', messages => {
// 	renderChat(messages);
// });