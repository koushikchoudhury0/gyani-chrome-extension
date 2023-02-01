(async function() {
    const GYANI_API_BASE_URL = 'http://localhost:3016';
    const GYANI_API_STATIC_TOKEN = 'dHvHU5CbDDp8NngfC9gYMzZQkmg2rwiGfKfnxujafNcLiCvNXN';

    const getAnswer = async() => {
        return new Promise((R, J) => {
            try {
                let question = window.getSelection().toString();
                if (question) {
                    if (!question.endsWith('?'))
                        question += '?';
                    const ENDPOINT = `${GYANI_API_BASE_URL}/ask`;
                    $.post({
                        url: ENDPOINT,
                        headers: {
                            'Authorization': GYANI_API_STATIC_TOKEN,
                            'Content-Type': 'application/json'
                        },
                        data: JSON.stringify({ question })
                    }).done((resB) => {
                        console.log(resB);
                        R(resB[resB.success?'answer':'msg']);
                    }).fail((err) => J(err));
                } else J(new Error('No Question Found'));
            } catch(err) {
                J(err);
            }
        });
    }
      
    const getAnswerAsync = async () => {
        try {
            const answer = await getAnswer();
            alert(answer);
        } catch(err) {
            console.err(err);
            alert("Something went wrong");
        }
    }
    
    await getAnswerAsync();
})();
