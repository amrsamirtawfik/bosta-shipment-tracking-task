export const shipmentApiRequest = (key) => {
  return (dispatch) => {
    const apiUrl = `https://tracking.bosta.co/shipments/track/${key}`;

    // Return the Promise from fetch
    return fetch(apiUrl)
      .then((response) => {
        // Check if the response status is OK (status code 200)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse the response as JSON
        return response.json();
      })
      .then((data) => {
        // Data from the API is available here
        

        dispatch({
          type: "TRACKING_SHIPMENT_REQUEST",
          payload: data,
        });
      })
      .catch((error) => {
        // Handle errors here
        console.error("There was a problem with the fetch operation:", error);
      });
  };
};
