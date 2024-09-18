var pdetails = [
    {
        name: 'laptop',
        price: 45000,
        discount: 10,
        manufacturer: 'sony',
        rating: 4,
        image:'images/laptop.png'
    },
    {
        name: 'Vivo T1 5G',
        price: 17000,
        discount: 8,
        manufacturer: 'Vivo',
        rating: 5,
        image:'images/vivo.png'
    },
    {
        name: 'Smart Watch',
        price: 1700,
        discount: 5,
        manufacturer: 'Fire Bolt',
        rating: 3,
        image:'images/smartwatch.png'
    },
    {
        name: 'Dizo headset',
        price: 1400,
        discount: 8,
        manufacturer: 'xiaomi',
        rating: 4,
        image:'images/headset.png'
    }
]

var rater = (n) => {
    var rate = document.createElement('span');
    for(var i = 1;i<=n;i++){
        var spanTag = document.createElement('img')
        spanTag.setAttribute('src','images/fullStar.png')
        rate.append(spanTag);
    }
    for(var j = 1;j<=(5-n);j++){
        var spanTag2 = document.createElement('img');
        spanTag2.setAttribute('src','images/greyStar.png')
        rate.append(spanTag2);
    }
    return rate
}

var loadProduct = (sample) => {
    var ulTag = document.createElement('ul');
    ulTag.setAttribute('class','product');

    var li1 = document.createElement('li');
    li1.innerText = 'Product: '+sample.name;
    ulTag.append(li1);

    var li2 = document.createElement('li');
    var span1 = document.createElement('span');
    span1.setAttribute('class','orgPrice');
    span1.innerText = sample.price;    
    var span2 = document.createElement('span');
    span2.setAttribute('class','disPrice');
    span2.innerText = sample.price - ((sample.price * sample.discount)/100);    
    li2.innerText = 'Price: ' ;
    li2.append(span1);
    li2.append(span2);
    ulTag.append(li2);

    var li3 = document.createElement('li');
    li3.innerText = 'Manufacturer: ' + sample.manufacturer;
    ulTag.append(li3)

    var li4 = document.createElement('li');
    li4.setAttribute('class','rate');
    li4.innerText = 'Ratings:  '
    star = rater(sample.rating);
    li4.append(star);
    ulTag.append(li4);

    var li5 = document.createElement('li');
    li5.setAttribute('class','image');
    var imgTag = document.createElement('img');
    imgTag.setAttribute('src',sample.image);
    li5.append(imgTag)
    ulTag.append(li5);


    document.querySelector('.container').append(ulTag);
    
}



for (var i in pdetails){
    loadProduct(pdetails[i])
}