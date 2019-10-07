function loadFiles(url) {
  let data = fetch(url);
  return data.then(data => {
    return data = data.json();
  })
}

if (!localStorage.id || localStorage.id == NaN) {
  localStorage.setItem('id', 1);
}


//defined the function which reads data off an list in the other file phones.js
function insertPhones(array, target) {
  array.forEach((phone, index) => {
    if (target.id == "phonesList" || target.id == "productList") {

      //creating all the elements needed to insert the phones

      let list = document.createElement('li');

      let form = document.createElement('form');

      let label = document.createElement('label');
      label.setAttribute('name', 'phone');
      label.setAttribute('for', 'phone');
      label.setAttribute('hidden', 'true');
      let input = document.createElement('input');
      input.setAttribute('name', 'phone');
      input.setAttribute('for', 'phone');
      input.setAttribute('value', phone.phone)
      input.setAttribute('hidden', 'true');

      let label1 = document.createElement('label');
      label1.setAttribute('name', 'price');
      label1.setAttribute('for', 'price');
      label1.setAttribute('hidden', 'true');
      let input1 = document.createElement('input');
      input1.setAttribute('name', 'sale');
      input1.setAttribute('for', 'sale');
      input1.setAttribute('value', phone.price[phone.capacity[0]]);
      input1.setAttribute('hidden', 'true');


      //set the href attribute of the "a" according to the "phones" array
      form.setAttribute("action", "./phoneInfo.html");

      form.setAttribute("method", "GET");

      form.append(label);
      form.append(input);
      form.append(label1);
      form.append(input1);

      let para1 = document.createElement('hidden1');
      //append the name of the phone to the text node of "a" according to the "phones" array
      para1.append(document.createTextNode(phone.phone));
      let div = document.createElement('div');
      div.setAttribute('class', 'img_container');
      //create img element
      let image = document.createElement('img');
      //set src of image element according to the "phones" array
      let phoneName = phone.phone.replace(/\+/g, ' ');
      let name = phoneName.replace(/ /g, '');
      image.setAttribute("src", phone.img[0] + phone.colors[0] + '/' + name + '_' + '0' + '.png');

      div.append(image);

      let para = document.createElement('p');
      ////append the name of the phone to the text node of "p" according to the "phones" array
      if (phone.price[phone.capacity[0]] != undefined) {
        para.append(document.createTextNode("£" + phone.price[phone.capacity[0]]));
      }

      let para2 = document.createElement('p');
      para2.append(document.createTextNode(phone.screen));
      para2.style.display = "none";

      let itemButton = document.createElement('button');
      itemButton.append(document.createTextNode("View Details"));
      itemButton.setAttribute("type", "submit");
      //lastly put everything toghether making the item box
      list.append(para1);
      list.append(div);
      list.append(para);
      list.append(para2)
      list.appendChild(form).append(itemButton);
      //append current block of html code to the targeted div (phonesList)
      target.append(list);
    } else if (target.id == "offerList") {
      let list = document.createElement('li');
      //create "a" element
      let form = document.createElement('form');

      let perTG = (phone.price[phone.capacity[0]] * 0.2).toFixed(2);
      let newPrice = phone.price[phone.capacity[0]] - perTG;
      newPrice = newPrice.toFixed(2);

      let label = document.createElement('label');
      label.setAttribute('name', 'phone');
      label.setAttribute('for', 'phone');
      label.setAttribute('hidden', 'true');
      let input = document.createElement('input');
      input.setAttribute('name', 'phone');
      input.setAttribute('for', 'phone');
      input.setAttribute('value', phone.phone)
      input.setAttribute('hidden', 'true');

      let label1 = document.createElement('label');
      label1.setAttribute('name', 'price');
      label1.setAttribute('for', 'price');
      label1.setAttribute('hidden', 'true');
      let input1 = document.createElement('input');
      input1.setAttribute('name', 'sale');
      input1.setAttribute('for', 'sale');
      input1.setAttribute('value', perTG)
      input1.setAttribute('hidden', 'true');


      //set the href attribute of the "a" according to the "phones" array
      form.setAttribute("action", "./phoneInfo.html");

      form.setAttribute("method", "GET");

      form.append(label);
      form.append(input);
      form.append(label1);
      form.append(input1);

      let div1 = document.createElement('div');
      div1.setAttribute('class', 'offerList_left');
      let div2 = document.createElement('div');
      div2.setAttribute('class', 'offerList_right');

      let para1 = document.createElement('h1');
      //append the name of the phone to the text node of "a" according to the "phones" array
      para1.append(document.createTextNode(phone.phone));

      div1.setAttribute('class', 'img_container');
      //create img element
      let image = document.createElement('img');
      //set src of image element according to the "phones" array
      let phoneName = phone.phone.replace(/\+/g, ' ');
      let name = phoneName.replace(/ /g, '');
      image.setAttribute("src", phone.img[0] + phone.colors[0] + '/' + name.toLowerCase() + '_' + '0' + '.png');



      let box = document.createElement('div');
      box.setAttribute('class', 'offerBox');

      let itemButton = document.createElement('button');
      itemButton.append(document.createTextNode("Get Deal"));
      itemButton.setAttribute("type", "submit");

      let liBox = document.createElement('div');
      liBox.setAttribute('class', 'featureBox');

      let display = document.createElement('h3');
      display.append(document.createTextNode(phone.display));

      Array.from(phone.fetures).forEach(feature => {
        let featureI = document.createElement('h3');
        featureI.append(document.createTextNode(feature));
        liBox.append(featureI);
      })


      let priceBox = document.createElement('h2');

      priceBox.append(document.createTextNode("£" + newPrice));

      liBox.append(display);
      liBox.append(priceBox);
      box.append(liBox);
      div1.append(para1);
      div1.append(image);
      div2.append(box);
      div2.appendChild(form).append(itemButton)

      list.append(div1);
      list.append(div2);

      //append current block of html code to the targeted div (phonesList)
      target.append(list);
    }
  });
}

//This function decides which is the current page, and calls insertPhone() function with different parameters
function insertPhonesDecision(daily, offer, all) {
  //retrieve the div that we are going to be appending this list to
  if (daily) {
    const phonesList = document.getElementById('phonesList');
    const randomPhones = new Array();
    let done = new Array();
    for (let i = 0; i < 8; i++) {
      let randomNumber = Math.floor(Math.random() * phones.length);
      if (!done.includes(randomNumber)) {
        let result = phones[randomNumber];
        done.push(randomNumber);
        randomPhones.push(result);
      }
    }
    insertPhones(randomPhones, phonesList);
  } else if (offer) {
    let offerList = document.getElementById('offerList');
    let offerPhones = phones.filter(phone => {
      if (phone.screen) {
        return phone;
      }
    })
    insertPhones(offerPhones, offerList);
  } else if (all) {
    const productList = document.getElementById('productList');
    insertPhones(phones, productList);
  }
}


//This function initializes the search engine
function initSearch(page) {
  if (page == "home") {
    let targetDiv = "phonesList";
    search(targetDiv, "block");
  } else if (page == "offers") {
    let targetDiv = "offerList";
    search(targetDiv, "flex");
  } else if (page == "products") {
    let targetDiv = "productList";
    search(targetDiv, "block");
  }
}

//defined function for search function that filters elements on the page
function search(targetDiv, type) {
  const searchBar = document.forms['searchPhones'].querySelector('input');
  searchBar.style.display = "block";
  let searching = document.getElementById('searchResults');
  let phonesList = document.getElementById(targetDiv).children;
  phonesList = Array.from(phonesList);

  searchBar.addEventListener('keyup', function (e) {
    let term = e.target.value;
    term = term.replace(/\W+/g, ' ');
    phonesList.forEach(phone => {
      phoneV = phone.firstElementChild.textContent.toLowerCase();
      if (phoneV.indexOf(term) != -1) {
        searching.style.display = "none";
        phone.style.display = type;
      } else {
        searching.style.display = type;
        phone.style.display = "none";
      }
    });
  });
}

let slideIndex = 1;

//this function 
function getPhoneInfo(color) {
  let phone = location.search.substring(1);
  phone = JSON.parse('{"' + phone.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) {
    return key === "" ? value : decodeURIComponent(value)
  });
  let priceFromUrl = location.search.split('&')[1];


  priceFromUrl = priceFromUrl.replace('sale=', '');



  let phoneName = phone.phone.replace(/\+/g, ' ');
  Array.from(phones).forEach(phone => {
    if (phone.phone == phoneName) {

      //created slides function which inserts the pictures in the slideshow
      function loadSlides(color) {
        //looped trough all the images in the dataset used to load the information about the phones
        Array.from(phone.img).forEach((img, index) => {
          //created a div element which will be used as the container
          let div = document.createElement('div');
          //if the this is the first iteration of the loop then set all the images to hidden
          if (index != 0) {
            div.style.display = "none";
          }
          /*added the class name of fade, for animation when changing slides, 
          and add sliderImage to fromat the slides with CSS
          */
          div.setAttribute('class', 'sliderImage fade');
          //created a paragraph 
          let div2 = document.createElement('p');
          //added the class numberText to the p 
          div2.setAttribute('class', 'numbertext');

          let arrLength = phone.img.length;

          div2.innerText = index + 1 + " / " + arrLength;
          let image = document.createElement('img');
          let name = phoneName.replace(/ /g, '');

          image.src = `${img}${color}/${name}_${index}.png`;

          //created the back button and assigned the required attributes
          let btn_left = document.createElement('i');
          btn_left.setAttribute('id', 'left_btn');
          btn_left.setAttribute('class', 'left');
          btn_left.setAttribute('onclick', 'plusSlides(-1)');

          //created the next button and assigned the required attributes
          let btn_right = document.createElement('i');
          btn_right.setAttribute('id', 'right_btn');
          btn_right.setAttribute('class', 'right');
          btn_right.setAttribute('onclick', 'plusSlides(+1)');

          // let div3 = document.createElement('div');
          // div3.setAttribute('class', 'text');
          // div3.innerText = phone.phone;

          //appended everything to the container in the right order
          div.append(div2);
          div.append(image);
          div.append(btn_left);
          div.append(btn_right);
          // div.append(div3);

          //appended the contaainer to the target
          targetContainer.append(div);
        })
      }

      function loadInfo(color) {
        let capacity = phone.capacity[0];
        Array.from(phone.colors).forEach(color => {
          let colourBtn = document.getElementById('colour');
          let btn = document.createElement('button');
          btn.setAttribute('value', color);

          btn.setAttribute('name', color);

          btn.style.backgroundColor = color;

          let colorName = color.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
          btn.innerText = colorName;
          colourBtn.append(btn);
        })

        Array.from(phone.capacity).forEach(item => {
          let capacityBtn = document.getElementById('capacity');
          let btn = document.createElement('button');
          btn.setAttribute('value', item);
          btn.innerText = item + " GB";
          capacityBtn.append(btn);
        })

        loadSlides(phone.colors[0]);

        let colourS = document.getElementById('colour').children;

        Array.from(colourS).forEach(button => {
          button.addEventListener('click', function (e) {
            document.getElementById("slideshow-container").innerHTML = "";
            loadSlides(e.target.value)
            slideIndex = 1;
          })
        })

        let inStock = document.getElementById('stock').children[1];
        if (phone.stock) {
          inStock.innerHTML = "&#10004;";
        } else {
          inStock.innerHTML = "&#10006;";
        }

        let priceOff = phone.price[phone.capacity[0]];

        if (priceOff == priceFromUrl) {
          let price = document.getElementById('price');
          let priceTxt = document.createElement('h2');
          priceTxt.setAttribute('value', priceFromUrl);
          priceTxt.innerText = "Price: £" + priceFromUrl;

          price.append(priceTxt);
        } else {
          let price = document.getElementById('price');
          let priceTxt = document.createElement('h2');

          priceTxt.setAttribute('value', priceFromUrl);
          priceTxt.innerText = "Price: £" + priceFromUrl;

          price.append(priceTxt);
        }




        let linkDesc = document.getElementById('linkToPhone');

        linkDesc.children[0].setAttribute('href', phone.link);


      }
      let targetContainer = document.getElementsByClassName('slideshow-container')[0];


      loadInfo(color);

    }
  });

  document.getElementById('phoneName').querySelector('h1').textContent = phoneName;

}



// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  //declared variable i
  var i;
  //selected the slider div
  var slides = document.getElementsByClassName("sliderImage");
  //start the slider at position 1
  if (n > slides.length) {
    slideIndex = 1
  }
  //if the slideIndex goes below 1 then it is set to the last image
  if (n < 1) {
    slideIndex = slides.length
  }
  //here it hides each image
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //then unhides the image that's in the slide index, the current image
  slides[slideIndex - 1].style.display = "block";
}



function addToBasket() {

  function addFormData(name, color, capacity, quantity, price) {
    form[0].value = localStorage.id;
    form[1].value = name;
    form[2].value = color;
    form[3].value = capacity;
    form[4].value = quantity;
    form[5].value = price;
  }

  let sel = document.getElementById('quantity');
  sel = sel.children[0];

  let form = document.getElementById('addCart').querySelectorAll('input');
  let name = document.getElementById('phoneName').children[0].textContent;

  let color = document.getElementById('colour').children[0].value;
  let capacity = document.getElementById('capacity').children[0].value;

  let pickedPhone = phones.filter(phone => phone["phone"] == name);
  phonePrice = pickedPhone[0].price[capacity];

  let price = document.getElementById('price').children[0];
  let priceValue = phonePrice * sel.value;

  price.setAttribute('value', priceValue);
  price.innerText = `Price  ${priceValue.toLocaleString('en-GB',{ style: 'currency', currency: 'GBP' })}`;







  sel.addEventListener('change', _ => {
    price = document.getElementById('price').children[0];
    priceValue = phonePrice * sel.value;
    price.setAttribute('value', priceValue);
    price.innerText = `Price  ${priceValue.toLocaleString('en-GB',{ style: 'currency', currency: 'GBP' })}`;
    addFormData(name, color, capacity, sel.value, priceValue);
  })

  setTimeout(() => {
    document.getElementById('colour').addEventListener('click', e => {

      if (e.target.nodeName == "BUTTON") {
        Array.from(e.target.parentNode.children).forEach(button => {
          button.style.backgroundColor = button.value;
          button.style.border = "none";
        });
        e.target.style.border = "solid 4px lime";
        color = e.target.value;
        addFormData(name, color, capacity, sel.value, phonePrice);
      }
    })

    document.getElementById('capacity').addEventListener('click', e => {
      if (e.target.nodeName == "BUTTON") {
        Array.from(e.target.parentNode.children).forEach(button => button.style.border = "none");
        e.target.style.border = "4px solid lime";
        capacity = e.target.value;

        phonePrice = pickedPhone[0].price[capacity];

        price = document.getElementById('price').children[0];
        priceValue = phonePrice * sel.value;

        price.setAttribute('value', priceValue);
        price.innerText = `Price  ${priceValue.toLocaleString('en-GB',{ style: 'currency', currency: 'GBP' })}`;

        addFormData(name, color, capacity, sel.value, phonePrice);
      }
    })

    addFormData(name, color, capacity, sel.value, phonePrice);

    let addToCart = document.getElementById('addCartBtn');
    addToCart.addEventListener('click', _ => {
      localStorage.id++;
    })
  }, 200);
}

function basket() {
  let basketItem = document.getElementById('basketItems');

  for (let i = 0; i < localStorage.id + 1000; i++) {


    let phoneNameLoc = JSON.parse(localStorage.getItem(i));
    if (phoneNameLoc != null) {

      let row = document.createElement('tr');
      let item = document.createElement('td');
      item.setAttribute('class', 'thumb');
      let item2 = document.createElement('td');
      item2.setAttribute('class', 'info')
      let name = document.createElement('h2');
      name.textContent = phoneNameLoc[1] + " (" + phoneNameLoc[3] + " GB)";

      let price = document.createElement('p');
      price.textContent = "£" + phoneNameLoc[5];

      let color = document.createElement('p');
      let colorVal = phoneNameLoc[2].replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      color.textContent = colorVal;

      let link = document.createElement('a');
      link.setAttribute('href', `phoneInfo.html?phone=${phoneNameLoc[1].replace(/ /g, '+')}&price=${phoneNameLoc[5]}`);

      let image = document.createElement('img');
      link.append(image);

      let line = document.createElement('hr')

      let deleteItem = document.createElement('button');
      deleteItem.setAttribute('class', 'delete');
      deleteItem.setAttribute('type', 'button');
      deleteItem.setAttribute('value', phoneNameLoc[0]);
      deleteItem.textContent = "Delete";
      let imgPath = `assets/${phoneNameLoc[1].replace(/ /g,'')}/${phoneNameLoc[2]}/${phoneNameLoc[1].replace(/ /g,'')}_0.png`;
      image.setAttribute('src', imgPath);
      image.src = image.src.replace('webpages', '');
      let quantity = document.createElement('p');
      phoneNameLoc[4] = phoneNameLoc[4].replace('Quantity:', 'Quantity: ');
      quantity.innerHTML = phoneNameLoc[4];

      item2.append(name);
      item2.append(price);
      item2.append(color);
      item2.append(quantity);
      item2.append(deleteItem);
      item.append(link);
      row.append(item);
      row.append(item2);
      basketItem.append(row);
      basketItem.append(line);
    }
    let checkoutBox = document.getElementById('checkoutBox');
  }

  let deletePress = document.getElementsByClassName('delete');
  Array.from(deletePress).forEach(deleteBtn => {
    if (deleteBtn != undefined) {
      deleteBtn.addEventListener('click', e => {
        e.target.parentNode.parentNode.parentNode.querySelector('hr').remove();
        localStorage.removeItem(e.target.value);
        e.target.parentNode.parentNode.remove();
        totalPriceF();
      })
    }
  })

  let checkoutBox = document.getElementById('checkoutBox');
  let listInputs = checkoutBox.querySelectorAll('div');
  listInputs.forEach(items => {
    items.querySelector('button').addEventListener('click', e => {
      let input = e.target.parentNode.querySelector('input');
      let label = e.target.parentNode.querySelector('label');
      let buttons = e.target.parentNode.parentNode.querySelectorAll('button');
      let button = e.target;

      if (input != null) {
        input.classList.toggle('hidden');
        label.classList.toggle('hidden');
        if (input.classList.contains('hidden') && input.value != "") {
          label.textContent = input.value;
        }
      } else {
        Array.from(buttons).forEach(button => {
          if (!button.classList.contains('carryOrder')) {
            button.style.backgroundColor = "";
            button.style.border = "";
          }
        })
        if (!button.classList.contains('carryOrder')) {
          button.style.backgroundColor = "aqua";
          button.style.border = "2px solid black";
        }
      }
    })
  })





  function totalPriceF() {
    let orderTotal = document.getElementById('orderTotal');
    let allPhones = document.getElementById('basketItems').children;
    let totalPrice = 0;

    Array.from(allPhones).forEach(item => {
      item = item.children[1];
      if (item != undefined) {
        let quantity = item.children[3].innerText.replace('Quantity: ', '');
        item = item.children[1].innerHTML;
        item = item.replace('£', '');
        item = parseFloat(item);
        totalPrice += item * quantity;
      }
    })

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    orderTotal.innerHTML = "Order Total: £" + numberWithCommas(totalPrice.toFixed(2));
  }
  totalPriceF();

  let orderNow = document.getElementById('Order');
  orderNow.addEventListener('click', e => {
    document.write('<h1 style="text-align:center;">Thanks for buying with us!</h1>')
  })
}


function products() {
  let slider = document.getElementById('priceSlider');
  let container = document.getElementById('productList');
  let display = document.getElementById('displayRange');

  //slider function is implemented in this event listener
  slider.addEventListener('input', e => {
    if (document.body.contains(container)) {
      display.textContent = `£${slider.value}`;
      let items = document.getElementById('productList');
      items = items.children;
      Array.from(items).forEach(item => {
        let itemPrice = item.children[2].textContent.replace('£', '');
        itemPrice = parseFloat(itemPrice);
        if (itemPrice < slider.value) {
          item.style.display = "block";
        } else {
          item.style.display = "none"
        }
      });
      let newPhone = phones.filter(phone => phone.price < slider.value);
      insertPhones(newPhone, "productList");
    }
  })

  //select make function will be here
  let make = document.getElementById('selectMake');
  make.addEventListener('change', e => {
    let value = make.value.toLowerCase();
    if (value !== 'any') {
      let items = document.getElementById('productList');
      Array.from(items.children).forEach(item => {
        let itemName = item.children[0].textContent.replace(/ /g, '').toLowerCase();
        if (!itemName.includes(value)) {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        }
      });
    } else {
      Array.from(container.children).forEach(item => item.style.display = "block");
    }
  })

  //set up the size properties so it filters phones by size
  let screenSize = document.getElementById('buttonInch').querySelectorAll('button');

  screenSize[0].addEventListener('click', e => {
    let items = document.getElementById('productList');
    Array.from(items.children).forEach(item => {
      let value = item.children[3].textContent;
      if (e.target.value <= value) {
        item.style.display = "none";
      } else {
        item.style.display = "block";
      }
    })
  })

  screenSize[1].addEventListener('click', e => {
    let items = document.getElementById('productList');
    Array.from(items.children).forEach(item => {
      let value = item.children[3].textContent;
      if (e.target.value >= value) {
        item.style.display = "none";
      } else {
        item.style.display = "block";
      }
    })
  })

  document.getElementById('reset').addEventListener('click', _ => {
    let items = document.getElementById('productList');
    Array.from(items.children).forEach(item => item.style.display = "block");
    let slider = document.getElementById('priceSlider');
    slider.value = "0";
    let display = document.getElementById('displayRange');
    display.textContent = `£0`;
  })

}

function help() {
  let openForm = document.getElementById('openForm');
  openForm.addEventListener('click', e => {
    window.location.replace('./form.html');
  })


}