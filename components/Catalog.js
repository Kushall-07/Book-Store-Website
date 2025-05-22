import React from "react";

const comics = [
    { id: 1, title: "Batman", price: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsAt__hby4KMK-eLYqFhwGeJQqmCU4e0eLmam5QtKxeShCalTgiDCGsRtnAIzb_qQNiCA&usqp=CAU", genre: "Action" },
    { id: 2, title: "Spider-Man", price: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4zOO2fnr31YCawKsn-Hq1CHDeKA9j6bQHA&s", genre: "Adventure" },
    { id: 3, title: "Superman", price: 10, image: "https://i.redd.it/gx358ic7397e1.jpeg", genre: "Action" },
    { id: 4, title: "X-Men", price: 14, image: "https://i.pinimg.com/474x/26/71/b6/2671b624e1ebdc2fbcc9c920c89fe7e1.jpg", genre: "Sci-Fi" },
    { id: 5, title: "The Flash", price: 11, image: "https://m.media-amazon.com/images/I/51an48reXPL.AC_UF894,1000_QL80.jpg", genre: "Action" },
    { id: 6, title: "Wonder Woman", price: 16, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQA2zYk6EsdN-unOaDthGMSMrmqawMFy4rA&s", genre: "Fantasy" },
    { id: 7, title: "Iron Man", price: 13, image: "https://i.pinimg.com/736x/ac/98/ef/ac98efd986d3890e785052591684f9ae.jpg", genre: "Adventure" },
    { id: 8, title: "Captain America", price: 15, image: "https://m.media-amazon.com/images/I/81U9EbWexxL.AC_UF1000,1000_QL80.jpg", genre: "Action" },
    { id: 9, title: "Thor", price: 17, image: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:376/h:557/q:75/https://bleedingcool.com/wp-content/uploads/2021/09/E_vK5N6XoAYP99c.jpeg", genre: "Fantasy" },
    { id: 10, title: "Hulk", price: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbhLAtdMx_DWwVsZcEBljSweKlpJRd40d2A&s", genre: "Action" },
    { id: 11, title: "Green Lantern", price: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76H9an7hrKf8lECYdsW2pVlBcWjD9fEosAg&s", genre: "Sci-Fi" },
    { id: 12, title: "Black Panther", price: 14, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB7wu6I4AKgTbgyZfxiwWMjEQnf-m4Js-M8A&s", genre: "Action" },
    { id: 13, title: "Doctor Strange", price: 13, image: "https://m.media-amazon.com/images/I/81rHrwZLHoL.jpg", genre: "Sci-Fi" },
    { id: 14, title: "Deadpool", price: 16, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUuzTLuI56PVj82GpLj4JY0zCiwms6D5C7SQ&s", genre: "Adventure" },
    { id: 15, title: "Aquaman", price: 12, image: "https://images-cdn.ubuy.co.in/633ff470517c2778f535e3eb-mcposters-dc-aquaman-jason-momoa.jpg", genre: "Fantasy" },
];

const anime = [
    { id: 19, title: "Naruto", price: 10, image: "https://posterwa.com/cdn/shop/files/NARUTO37_682fec30-603c-466e-9c5d-0033ee55d9b0.jpg?v=1691434731", genre: "Action" },
    { id: 20, title: "Attack on Titan", price: 12, image: "https://i.pinimg.com/736x/39/e3/40/39e340e553af6f5d69e605093ce2c735.jpg", genre: "Action" },
    { id: 21, title: "One Piece", price: 15, image: "https://i.pinimg.com/474x/9f/ff/1f/9fff1ff228bdbac6666fb7c8fdfbfb3f.jpg", genre: "Adventure" },
    { id: 22, title: "Dragon Ball Z", price: 14, image: "https://imgc.allpostersimages.com/img/posters/dragon-ball-z-saiyans_u-L-FAENZV0.jpg", genre: "Fantasy" },
    { id: 23, title: "Death Note", price: 11, image: "https://www.postergully.com/cdn/shop/products/117_2_eb7460fc-f14b-40e0-9590-110fc7dc1ad8.jpg?v=1578647752", genre: "Thriller" },
    { id: 24, title: "Demon Slayer", price: 16, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZS1ANhKvl2DhCP8hSzTJJnU-mj6rdQk84JQ&s", genre: "Action" },
    { id: 25, title: "Bleach", price: 13, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH3x01UiLyJHuJfKz9pnSX9WsqERZsggkug&s", genre: "Adventure" },
    { id: 26, title: "Jujutsu Kaisen", price: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Kb8bReP99jvViFQwLxcGOQNk7rxTMKlgkg&s", genre: "Fantasy" },
    { id: 27, title: "Tokyo Ghoul", price: 17, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3K4sEOcnbX2sUtK87PbpIMA8CX6qW-sNyGg&s", genre: "Thriller" },
    { id: 28, title: "My Hero Academia", price: 12, image: "https://m.media-amazon.com/images/I/81bIkyVXM1S.jpg", genre: "Adventure" },
];

function Catalog({ cart, setCart, searchQuery }) {
    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const filteredComics = comics.filter((comic) =>
        searchQuery ? comic.title.toLowerCase().includes(searchQuery.toLowerCase()) : true
    );
    
    const filteredAnime = anime.filter((item) =>
        searchQuery ? item.title.toLowerCase().includes(searchQuery.toLowerCase()) : true
    );

    return (
        <div className="catalog">
            <div className="comics-section">
                <h2>COMICS</h2>
                {filteredComics.map((comic) => (
                    <div key={comic.id} className="comic">
                        <img src={comic.image} alt={comic.title} />
                        <p>{comic.title} - ${comic.price}</p>
                        <button className="button" onClick={() => addToCart(comic)}>Add to Cart</button>
                    </div>
                ))}
            </div>

            <div className="anime-section">
                <h2>ANIME</h2>
                {filteredAnime.map((item) => (
                    <div key={item.id} className="comic">
                        <img src={item.image} alt={item.title} />
                        <p>{item.title} - ${item.price}</p>
                        <button className="button" onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

    


export default Catalog;