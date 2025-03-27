import Together from "together-ai";

export default async function TogetherAI(question) {
  const together = new Together({
    apiKey: "APIKEY"
  });

  // Step-by-step chat to train the assistant
  const response = await together.chat.completions.create({
    messages: [
      {
        "role": "user",
        "content": "Hello\n"
      },
      {
        "role": "assistant",
        "content": "Hello. It's nice to meet you. How may I assist you today? Please feel free to ask any questions about the candidate's profile."
      },
      {
        "role": "user",
        "content": "Can you tell me about the candidate's skills?"
      },
      {
        "role": "assistant",
        "content": "Sure! The candidate has the following skills:\n\n- Programming Languages: C++, C, JavaScript (ES6+)\n- Frontend: React.js, Next.js, HTML, CSS, TailwindCSS, Bootstrap\n- Backend: Node.js, Express.js, Firebase, MQTT, REST APIs\n- Database: MongoDB, Firebase\n- Tools & Platforms: Git, GitHub, Web3.js, HardHat, VS Code."
      },
      {
        "role": "user",
        "content": "What is the candidate's work experience?"
      },
      {
        "role": "assistant",
        "content": "The candidate has worked as a Software Developer Intern at Drobot.Inc (Remote) from August 2023 to January 2024. The key achievements in this role include:\n\n- Led the development of an Admin Portal using React and Node.js.\n- Integrated Firebase for real-time database management and secure authentication.\n- Implemented real-time communication using MQTT, reducing latency by 50%.\nTech Stack: React.js, Node.js, Firebase, MQTT, MongoDB, REST APIs."
      },
      {
        "role": "user",
        "content": "Can you provide details on the candidate's education?"
      },
      {
        "role": "assistant",
        "content": "The candidate is currently pursuing a Bachelor of Technology at the Indian Institute of Technology BHU (08/2022 - Present). Their major is in Electrical Engineering IDD."
      },
      {
        "role": "user",
        "content": "Tell me about the candidate's projects."
      },
      {
        "role": "assistant",
        "content": "The candidate has worked on the following projects:\n\n1. **ChainGamble (MERN, Rust, Euclid Protocol)**\n   - Developed a decentralized gambling platform with cryptographic randomness and cross-chain transactions.\n   - Built a scalable MERN-based interface with Rust-based smart contracts.\n\n2. **OtakuVerse (Next.js)**\n   - Created an anime exploration platform with JWT authentication and content filtering.\n   - Integrated AnimeDB API for seamless data flow between backend and user interface."
      },
      {
        "role": "user",
        "content": "What are the candidate's achievements?"
      },
      {
        "role": "assistant",
        "content": "The candidate's achievements include:\n\n- **Winner** of the Euclid Web3 Hackathon for creating a decentralized gambling platform with cross-chain transactions.\n- **Qualified** for the Smart India Hackathon (College Stage) with an AI-driven recruitment platform that enhanced resume matching accuracy using algorithms like Sentence-BERT, TF-IDF, and BoW."
      },
      {
        "role": "user",
        "content": `Given the provided information, answer the question: ${question}. Limit the response to 50 words,Ensure clarity and conciseness in the answer.`
      }
    ],
    model: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free"
  });

  console.log(response.choices[0].message.content);
  return response;
}
