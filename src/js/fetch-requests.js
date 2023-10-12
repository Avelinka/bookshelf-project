import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';
// const URL = 'https://books-backend.p.goit.global/books/';

//getBookCategories()
//запит за категоріями книг
export async function getBookCategories() {
  try {
    const response = await axios.get(`category-list`);
    if (response.status !== 200) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const categoriesList = response.data;
    console.log(categoriesList);
    return categoriesList;
  } catch (error) {
    Notiflix.Notify.failure(
      'Error fetching category-list. Please try again later.'
    );
    throw error;
  }
}

getBookCategories();

//getBooksByCategory('Paperback Nonfiction')
//запит за списком книг з обраної категорії
export async function getBooksByCategory(selectedCategory) {
  try {
    const response = await axios.get(`category?category=${selectedCategory}`);
    if (response.status !== 200) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    let booksByCategory = response.data;
    console.log(booksByCategory);
    return booksByCategory; // масив обʼєктів
  } catch (error) {
    Notiflix.Notify.failure(
      'Error fetching selected category. Please try again later.'
    );
    throw error;
  }
}
getBooksByCategory('Paperback Nonfiction');

//getInformationBtId('643282b1e85766588626a0dc')
//запит за повною інформацією про книгу по id
export async function getInformationBtId(id) {
  try {
    const response = await axios.get(`${id}`);
    if (response.status !== 200) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const bookInformation = response.data;
    console.log(bookInformation);
    return bookInformation;
  } catch (error) {
    Notiflix.Notify.failure(
      'Error fetching book by ID. Please try again later.'
    );
    throw error;
  }
}

getInformationBtId('643282b1e85766588626a0dc');
getInformationBtId('643282b3e85766588626a1ca');

//getTopBooks()
//запит за топ5 по кожній категорії
export async function getTopBooks() {
  try {
    const response = await axios.get(`top-books`);
    if (response.status !== 200) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const topBooksList = response.data;
    console.log(topBooksList);
    return topBooksList;
  } catch (error) {
    Notiflix.Notify.failure(
      'Error fetching top books. Please try again later.'
    );
    throw error;
  }
}

getTopBooks();
