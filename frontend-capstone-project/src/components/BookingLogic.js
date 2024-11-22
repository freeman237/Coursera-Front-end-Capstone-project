// Mock API function for fetching available booking times
export function fetchAPI(date) {
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    // Simulate filtering times based on the date (for simplicity, we return the same times here)
    return availableTimes;
  }
  
  // Function to initialize available times
  export function initializeTimes() {
    const today = new Date();
    return fetchAPI(today);
  }
  
  // Function to update available times based on selected date
  export function updateTimes(selectedDate) {
    const date = new Date(selectedDate);
    return fetchAPI(date);
  }
  