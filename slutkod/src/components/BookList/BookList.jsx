import './bookList.css';
import { useFetchBooks } from '../../hooks/useFetchBooks';
import BookItem from '../BookItem/BookItem';

function BookList({cart, removeFromCart, addToCart}) {
    const { books, isLoading, isError } = useFetchBooks();

    if(isLoading) return <div className="book-page__list">Loading...</div>
    if(isError) return <div className="book-page__list">Error loading books</div>

return (
    <section className="book-page__list">
        {
            books?.map((book, index) => {
                return <BookItem
                    cart={cart}
                    removeFromCart={removeFromCart}
                    addToCart={addToCart}
                    book={ book }
                    key={ index } 
                />
            })
        }
    </section>
)
}

export default BookList;