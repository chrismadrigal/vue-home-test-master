import {ref} from "vue";
import axios from "axios";

// Composable to get endpoints data from Json Server.
export default async function useApi(url) {
  const response = ref();
  const loaded = ref(false);
  const path = ref(url);
  const baseUrl = "http://localhost:3004";

  const request = async () => {
    try {
      const res = await axios.get(`${baseUrl}${path.value}`);
      response.value = res.data;
      // @Note: Not handling the errors in the UI at the moment.
      // But we could handle them by adding a error ref() and populating it  here.
    } catch (error) {
      console.log("Error Fetching data", error);
    } finally {
      loaded.value = true;
    }
  }

  if (loaded.value === false) {
    await request();
  }

  const reload = async (newUrl) => {
    path.value = newUrl || path.value;
    await request();
  }

  return { response, reload, loaded }

}

