const axios = require('axios');

class WhatsAppSender {
    constructor() {
        this.apiUrl = 'https://graph.facebook.com/v17.0/YOUR_PHONE_NUMBER_ID/messages'; // Replace with your phone number ID
        this.accessToken = 'YOUR_ACCESS_TOKEN'; // Replace with your access token
    }

    formatOrderMessage(orderData) {
        const items = orderData.carrinho.items
            .map(item => `• ${item.quantidade}x ${item.produto.nome} - R$ ${(item.produto.preco * item.quantidade).toFixed(2)}`)
            .join('\n');

        return `🛵 *Novo Pedido #${orderData.pedidoId}*\n\n` +
               `📱 Cliente: ${orderData.telefone}\n` +
               `🕒 Hora do Pedido: ${orderData.hora_pedido}\n` +
               `⏰ Previsão de Entrega: ${orderData.previsao_entrega}\n\n` +
               `📝 *Itens do Pedido:*\n${items}\n\n` +
               `💰 *Total: R$ ${orderData.total.toFixed(2)}*\n\n` +
               `🚚 *Entrega:* ${orderData.tipoEntrega}\n` +
               `📍 *Endereço:* ${orderData.enderecoEntrega || 'Retirada no local'}\n\n` +
               `*Status:* ${orderData.status_preparo}`;
    }

    async sendMessage(to, message) {
        try {
            const response = await axios.post(this.apiUrl, {
                messaging_product: "whatsapp",
                to: to,
                type: "text",
                text: { body: message }
            }, {
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`,
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error sending WhatsApp message:', error);
            throw error;
        }
    }
}

module.exports = new WhatsAppSender();