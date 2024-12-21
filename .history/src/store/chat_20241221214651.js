import { defineStore } from 'pinia';

export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: [],
    activeChats: [],
    currentChat: null
  }),
  
  actions: {
    addMessage(message) {
      this.messages.push(message);
    },
    
    setCurrentChat(chatId) {
      this.currentChat = chatId;
    },
    
    loadChatHistory(chatId) {
      // 加载聊天历史
    }
  }
}); 