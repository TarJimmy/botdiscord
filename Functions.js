class Functions {

    constructor(client) {
        this.client = client;
    }

    /**
     * Vérifie que le contenue du message ne contient pas les mots bannies de wordBanned.
     * Renvoie true si il contenait un mot banni, false sinon
     * Effet de bord: Supprime le message et le note dans le channel morale
     * @param message
     * @param wordBanned
     * @returns {boolean}
     */
    haveWordBanned = (message, wordBanned) => {
        if (!message.author.bot) {
            const strContent = message.content;
            var hasWordBan = false;
            wordBanned.forEach((value) => {
                if (strContent.toLowerCase().includes(value)) {
                    hasWordBan = true;
                    message.reply('T\'es fier de toi d\'utiliser le mot ' + value + ' ? Sache que tu n\'es qu\'une merde. Je supprime ton message');
                    message.delete();
                    this.client.channels.fetch("800466708464271361").then((channel) => {
                        if (!channel) return;
                        channel.send('Le ' + message.createdAt.toLocaleString('fr') + ' ' + message.author.username + ' ce gros fdp a dit:\n'
                            + message.content + '\nSachez que le mot ' + message.content + ' est banni !');
                    });
                }
            });
            return hasWordBan;
        } else {
            return false;
        }
    }
}

module.exports = Functions;
