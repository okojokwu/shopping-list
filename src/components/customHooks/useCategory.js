import { useContext, useEffect, useState } from 'react';
import { Context as ShoppingContext } from '../../context/shoppingContext';
import { Arr } from '../../Utils';

const useSortandFilter = () => {
  const {
    state: { pendingItems, filteredString },
  } = useContext(ShoppingContext);
  const [categories, setCategories] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setFilteredItems(
      pendingItems.filter((e) => e.item.includes(filteredString))
    );
    setCategories(Arr(pendingItems.map((e) => e.category)));
  }, [pendingItems, filteredString]);

  return { categories, filteredItems };
};

export default useSortandFilter;
