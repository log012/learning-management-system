// components/CategoryFilter.js

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  console.log(categories)
 console.log(selectedCategory)
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Categories</h2>
      <div className="flex space-x-4">
        {categories.map((category) => (
        
          <button
            key={category.id}
            className={`px-4 py-2 rounded-md transition duration-300 ${
              selectedCategory === category.id ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-900"
            }`}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
            
          </button>
          
        ))}
     
      </div>
    </div>
  );
};

export default CategoryFilter;
