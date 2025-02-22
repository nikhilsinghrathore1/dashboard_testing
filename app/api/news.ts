import type { NextApiRequest, NextApiResponse } from 'next';

// Define the response data type
type ResponseData = {
  message: string | object;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const resdata = await fetchCryptoNews();
    res.status(200).json({ message: resdata });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch crypto news' });
  }
}

const fetchCryptoNews = async () => {
  const url = "https://news-api65.p.rapidapi.com/api/v1/crypto/articles/search";
  const queryParams = new URLSearchParams({
    format: "json",
    time_frame: "24h",
    page: "1",
    limit: "10"
  });

  const headers = {
    "x-rapidapi-key": "e000cea702mshd26a5140845308fp15e15ejsn2309de509750",
    "x-rapidapi-host": "news-api65.p.rapidapi.com"
  };

  try {
    const response = await fetch(`${url}?${queryParams}`, { headers });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.articles || [];
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
};
