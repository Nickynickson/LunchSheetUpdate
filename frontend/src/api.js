const API_URL = 'http://localhost:5000/api';

export const getFoodItems = async () => {
  const response = await fetch(`${API_URL}/food-items`);
  return response.json();
};

export const addFoodItem = async (name) => {
  const response = await fetch(`${API_URL}/food-items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  });
  return response.json();
};

export const getUserChoices = async () => {
  const response = await fetch(`${API_URL}/user-choices`);
  return response.json();
};

export const addUserChoice = async (userId, foodItemId) => {
  const response = await fetch(`${API_URL}/user-choices`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId, foodItemId }),
  });
  return response.json();
};
