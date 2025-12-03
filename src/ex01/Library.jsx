import React from 'react';
import Book from './Book';

const Library = () => {
    return (
        <div>
           <Book name="리액트를 다루는 기술" numOfPage={350} />
           <Book name="알고싶어요" numOfPage={200} />
           <Book name="배우고싶은 타입그크립트" numOfPage={400} />
           <Book name="알고싶은 자바스크립트" numOfPage={480} />
        </div>
    );
};

export default Library;