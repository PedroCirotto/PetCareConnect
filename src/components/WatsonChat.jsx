import { useEffect } from "react";

export default function WatsonChat() {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "97adca9a-5aa7-42c2-b060-924c526786bd",
      region: "au-syd",
      serviceInstanceID: "4952d4e9-f829-485c-8aae-069c83559972",
      onLoad: async (instance) => {
        await instance.render();
      },
    };

    const script = document.createElement("script");
    script.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/${window.watsonAssistantChatOptions.clientVersion || 'latest'}/WatsonAssistantChatEntry.js`;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      delete window.watsonAssistantChatOptions;
    };
  }, []);

  return (
    <div
      id="watson-chat-wrapper"
      className="fixed bottom-5 right-5 z-[9999]"
    />
  );
}
