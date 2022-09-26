import { useState } from "react";
import { AddCategory, GifGrid } from "./components/index";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    ""
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return alert("Categoria ya usada");

    //categories.push(newCategory);
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* titulo */}
      <h1>Gifs App</h1>

      {/* Input */}

      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {/* Listado de Gifs */}

      
        {categories.map((category) => (

        <GifGrid key={category} category={category}/>

        ))
          
        }
      
      {/* Gif item */}

      
    </>
  );
};
