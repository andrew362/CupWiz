(function () {
  const section = document.getElementById('data-container');
  const container = document.createElement('div');
  container.className = 'container';
  section.appendChild(container);
  let produktsOnPage = 12;

  const productsInfo = [{
      id: 'product_1',
      name: 'Black and white crazy stripes cup',
      image: 'cup1.png',
      price: '67.00',
      oldPrice: '88.00',
      promotion: 'new'
    },
    {
      id: 'product_2',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '88.00',
      promotion: 'sale'
    },
    {
      id: 'product_3',
      name: 'Black and white crazy stripes cup',
      image: 'cup1.png',
      price: '67.00',
      oldPrice: '',
      promotion: 'new'
    },
    {
      id: 'product_4',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '88.00',
      promotion: 'sale'
    },
    {
      id: 'product_5',
      name: 'Black and white crazy stripes cup',
      image: 'cup1.png',
      price: '67.00',
      oldPrice: '88.00',
      promotion: 'new'
    },
    {
      id: 'product_6',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '',
      promotion: 'new'
    },
    {
      id: 'product_7',
      name: 'Black and white crazy stripes cup',
      image: 'cup1.png',
      price: '67.00',
      oldPrice: '88.00',
      promotion: 'sale'
    },
    {
      id: 'product_8',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '88.00',
      promotion: 'sale'
    },
    {
      id: 'product_9',
      name: 'Black and white crazy stripes cup',
      image: 'cup1.png',
      price: '67.00',
      oldPrice: '',
      promotion: ''
    },
    {
      id: 'product_10',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '',
      promotion: 'new'
    },
    {
      id: 'product_11',
      name: 'Black and white crazy stripes cup',
      image: 'cup1.png',
      price: '67.00',
      oldPrice: '',
      promotion: ''
    },
    {
      id: 'product_12',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '',
      promotion: 'new'
    },
    {
      id: 'product_13',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '88.00',
      promotion: 'sale'
    },
    {
      id: 'product_14',
      name: 'Black and white crazy stripes cup',
      image: 'cup1.png',
      price: '67.00',
      oldPrice: '',
      promotion: ''
    },
    {
      id: 'product_15',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '88.00',
      promotion: 'new'
    },
    {
      id: 'product_16',
      name: 'Black and white crazy stripes cup',
      image: 'cup1.png',
      price: '67.00',
      oldPrice: '88.00',
      promotion: 'sale'
    },
    {
      id: 'product_17',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '',
      promotion: ''
    },
    {
      id: 'product_18',
      name: 'Black and white crazy stripes cup',
      image: 'cup1.png',
      price: '67.00',
      oldPrice: '88.00',
      promotion: 'new'
    },
    {
      id: 'product_19',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '88.00',
      promotion: 'sale'
    },
    {
      id: 'product_20',
      name: 'Black and white crazy stripes cup',
      image: 'cup1.png',
      price: '67.00',
      oldPrice: '',
      promotion: ''
    },
    {
      id: 'product_21',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '',
      promotion: 'new'
    },
    {
      id: 'product_22',
      name: 'Black and white crazy stripes cup',
      image: 'cup1.png',
      price: '67.00',
      oldPrice: '',
      promotion: ''
    },
    {
      id: 'product_23',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '',
      promotion: ''
    },
    {
      id: 'product_24',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '',
      promotion: 'new'
    }, {
      id: 'product_25',
      name: 'Black and white crazy stripes cup',
      image: 'cup1.png',
      price: '67.00',
      oldPrice: '88.00',
      promotion: 'new'
    },
    {
      id: 'product_26',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '88.00',
      promotion: 'sale'
    },
    {
      id: 'product_27',
      name: 'Black and white crazy stripes cup',
      image: 'cup1.png',
      price: '67.00',
      oldPrice: '',
      promotion: 'new'
    },
    {
      id: 'product_28',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '88.00',
      promotion: 'sale'
    },
    {
      id: 'product_29',
      name: 'Black and white crazy stripes cup',
      image: 'cup1.png',
      price: '67.00',
      oldPrice: '88.00',
      promotion: 'new'
    },
    {
      id: 'product_30',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '',
      promotion: 'new'
    },
    {
      id: 'product_31',
      name: 'Black and white crazy stripes cup',
      image: 'cup1.png',
      price: '67.00',
      oldPrice: '88.00',
      promotion: 'sale'
    },
    {
      id: 'product_32',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '88.00',
      promotion: 'sale'
    },
    {
      id: 'product_33',
      name: 'Black and white crazy stripes cup',
      image: 'cup1.png',
      price: '67.00',
      oldPrice: '',
      promotion: ''
    },
    {
      id: 'product_34',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '',
      promotion: 'new'
    },
    {
      id: 'product_35',
      name: 'Black and white crazy stripes cup',
      image: 'cup1.png',
      price: '67.00',
      oldPrice: '',
      promotion: ''
    },
    {
      id: 'product_36',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '',
      promotion: 'new'
    },
    {
      id: 'product_37',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '88.00',
      promotion: 'sale'
    },
    {
      id: 'product_38',
      name: 'Black and white crazy stripes cup',
      image: 'cup1.png',
      price: '67.00',
      oldPrice: '',
      promotion: ''
    },
    {
      id: 'product_39',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '88.00',
      promotion: 'new'
    },
    {
      id: 'product_40',
      name: 'Black and white crazy stripes cup',
      image: 'cup1.png',
      price: '67.00',
      oldPrice: '88.00',
      promotion: 'sale'
    },
    {
      id: 'product_41',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '',
      promotion: ''
    },
    {
      id: 'product_42',
      name: 'Black and white crazy stripes cup',
      image: 'cup1.png',
      price: '67.00',
      oldPrice: '88.00',
      promotion: 'new'
    },
    {
      id: 'product_43',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '88.00',
      promotion: 'sale'
    },
    {
      id: 'product_44',
      name: 'Black and white crazy stripes cup',
      image: 'cup1.png',
      price: '67.00',
      oldPrice: '',
      promotion: ''
    },
    {
      id: 'product_45',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '',
      promotion: 'new'
    },
    {
      id: 'product_46',
      name: 'Black and white crazy stripes cup',
      image: 'cup1.png',
      price: '67.00',
      oldPrice: '',
      promotion: ''
    },
    {
      id: 'product_47',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '',
      promotion: ''
    },
    {
      id: 'product_48',
      name: 'Green square rush cup',
      image: 'cup2.png',
      price: '67.00',
      oldPrice: '',
      promotion: 'new'
    }
  ];


  /*------------------- Product card generator ----------------------------*/

  const card = (e) => {
    return `
  
  <div class="card hoverable">
    <div class="d-block promotion">
      <div class="pill d-none sale">Sale</div>
      <div class="pill ${e.promotion} ">${e.promotion}</div>
    </div>
    <div class="view">
      <img src="./img/images/${e.image}"
        class="card-img-top" alt="${e.name}">
      <a  data-toggle="collapse"  href="#${e.id}" aria-expanded="false" aria-controls="${e.id}">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>
    <div class="card-body">
      <h4 class="card-title font-weight-bolder text-uppercase text-center " data-id="${e.id}">${e.name}</h4>
      <div class="card-text" >
        <p class="price-old ${e.oldPrice ? '' : 'd-none'} ">$${e.oldPrice}/p>
        <p class="price-actual">from: <span class="${e.oldPrice ? '' : 'text-dark'}">$50.80</span> box</p>
        <p class="price-info">price exc. VAT</p>
      </div>
      
      <div class="collapse" data-parent="#cardCollection" id="${e.id}">
        <div class="expand-container">
          <div class="row">
            <div class="col">
                <button type="button" class="btn-choose btn btn-block">Choose Cups</button>
            </div>
          </div>
          <div class="row">
            <div class="col col-md-6 ">
                <button type="button" class="btn-aux btn-aux-favorite btn btn-block  ">
                <i class="far fa-heart"></i>
                  <p>Favorite</p>
                 
                </button>
            </div>
            <div class="col col-md-6">
                <button type="button" class="btn-aux btn-aux-compare btn btn-block  ">
                  <img src="./img/svg/product compare.svg" alt="Compare Icon">
                  <p>Compare</p>
                </button>
            </div>
          </div>
         
        </div>
      </div>
     
    </div>
  </div>
`;
  };

  processingData = (data) => {
    let row = document.createElement('div');
    row.className = 'row';
    row.id = 'cardCollection';
    data.forEach((el) => {
      let newItem = document.createElement('div');
      newItem.classList = 'col-md-6 col-lg-4 mb-4 d-flex align-items-stretch';
      newItem.innerHTML = card(el);
      row.append(newItem);
    });
    return row;
  }


  cardFunctionalities = () => {

    /*------------------- Collapsing product card-------------------------- */
    let dataContainer = document.getElementById('data-container');
    dataContainer.addEventListener('click', function (e) {
      $('.collapse').collapse('hide'); //hide all card

    }, false);

    let cardCollection = document.getElementsByClassName('card');

    let prevClick;

    for (let i = 0; i < cardCollection.length; i++) {
      cardCollection[i].addEventListener('click', function (e) {

        if (prevClick) {
          prevClick.classList.remove('cardOver');
        }
        prevClick = this;
        this.classList.add('cardOver');
      }, false)
    }

    /*----------------- Adding product to basket ---------------*/
    let btnChoose = document.getElementsByClassName('btn-choose');
    let btnFavourite = document.getElementsByClassName('btn-aux-favorite');
    const favouriteBtn = document.getElementById('favouriteCardPill');
    const shopingBtn = document.getElementById('shopingCardPill');
    let favouriteItemsQuality = 0;
    let shopingItemsQuality = 0;

    [...btnChoose].forEach((item) => {
      item.addEventListener('click', function (e) {
        e.stopPropagation();
        let parentCard = $(this).closest('.card').find('h4');
        let productTitle = parentCard.text();
        let productId = parentCard.data('id');
        console.log('Buy: Title: ', productTitle, ', Id: ', productId);
        shopingItemsQuality++;
        if (shopingItemsQuality > 0) {
          shopingBtn.classList.remove('d-none');
        } else {
          shopingBtn.classList.add('d-none');
        }
        shopingBtn.innerText = shopingItemsQuality;
      });
    });

    [...btnFavourite].forEach((item) => {
      item.addEventListener('click', function (e) {
        e.stopPropagation();
        let parentCard = $(this).closest('.card').find('h4');
        let productTitle = parentCard.text();
        let productId = parentCard.data('id');
        console.log('Favorite: Title: ', productTitle, ', Id: ', productId);
        favouriteItemsQuality++;
        if (favouriteItemsQuality > 0) {
          favouriteBtn.classList.remove('d-none');
        } else {
          favouriteBtn.classList.add('d-none');
        }
        favouriteBtn.innerText = favouriteItemsQuality;
      });
    });
  }

  /* ---------------Paggination------------------- */

  const statrNewPagination = () => {

    $('#pagination-container1').pagination({
      dataSource: productsInfo,
      prevText: '<i class="fas fa-chevron-left"></i> <span>PREV</span>',
      nextText: '<span>NEXT</span> <i class="fas fa-chevron-right"></i>',
      pageSize: produktsOnPage,
      pageNumber: 1,
      ajax: {
        beforeSend: function () {
          dataContainer.html('Loading data...');
        }
      },
      callback: function (data, pagination) {

        //Generating products on page
        let elements = processingData(data);
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
        container.appendChild(elements);
        cardFunctionalities();

        var paginationClone = $('#pagination-container1 > *').clone(true);
        $('#pagination-container2').empty();
        paginationClone.appendTo('#pagination-container2');
      }
    });

    /*Duplicating second paggination*/

    $('#pagination-container2').pagination({
      dataSource: productsInfo,

      callback: function (data, pagination) {

        var paginationClone = $('#pagination-container1 > *').clone(true);
        $('#pagination-container2').empty();
        paginationClone.appendTo('#pagination-container2');
      }
    });

  }

  statrNewPagination();


  /* ---------------Change amount product on page------------------- */

  const productPerPageSelector = document.getElementById('productPerPageSelector');
  productPerPageSelector.addEventListener('change', (e) => {
    console.log(e);
    produktsOnPage = e.target.value;
    statrNewPagination();
  });






})();
