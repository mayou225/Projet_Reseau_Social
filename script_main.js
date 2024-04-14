document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.querySelector('.share-post'); // Assuming there's only one share button for simplicity

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // getMonth() is zero-based
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const dateString = `${year}/${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    shareButton.addEventListener('click', function() {
        const textarea = this.closest('.my-post.box').querySelector('.status-textarea');

        if (textarea.value.trim() !== '') {
            const newPostDiv = document.createElement('div');
            newPostDiv.classList.add('my-post', 'box');
            newPostDiv.innerHTML = `

                            <div class="status-main">
                                <img src="https://i.pinimg.com/736x/fc/90/a7/fc90a70c6abd68dd5d0954bcf7cff7df.jpg" class="mini-profile-picture">
                                <div class="my-post-detail">
                                    <div class="my-post-title"><strong>Akram</strong></div>
                                    <div class="my-post-date">${dateString}</div>
                                </div>
                            </div>
                            <div class="my-post-content">${textarea.value}
                            </div>
                    
            `;

            // Append the new post to the content-right container
            document.querySelector('.content-right').appendChild(newPostDiv);

            // Optionally, clear the textarea
            textarea.value = '';
        } else {
            alert('Please enter some text to share.');
        }
    });


});