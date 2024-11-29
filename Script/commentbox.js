
    // Function to display comments from local storage
    function displayComments() {
      const commentList = document.getElementById('comment-list');
      commentList.innerHTML = ''; // Clear existing comments

      // Retrieve comments from local storage
      const storedComments = JSON.parse(localStorage.getItem('comments')) || [];

      // Display each comment on the page
      storedComments.forEach(function(comment, index) {
        const commentItem = document.createElement('div');
        commentItem.classList.add('comment');

        const commentAuthor = document.createElement('p');
        commentAuthor.classList.add('author');
        commentAuthor.textContent = 'Anonymous';

        const commentContent = document.createElement('p');
        commentContent.textContent = comment;

        const timestamp = document.createElement('div');
        timestamp.classList.add('timestamp');
        timestamp.textContent = 'Anonymous | ' + getCurrentTimestamp();

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
          deleteComment(index);
        });

        commentItem.appendChild(commentAuthor);
        commentItem.appendChild(commentContent);
        commentItem.appendChild(timestamp);
        commentItem.appendChild(deleteButton);
        commentList.appendChild(commentItem);
      });
    }

    // Get current timestamp
    function getCurrentTimestamp() {
      const now = new Date();
      const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
      return now.toLocaleDateString('en-US', options);
    }

    // Delete a comment
    function deleteComment(index) {
      // Retrieve existing comments from local storage
      const storedComments = JSON.parse(localStorage.getItem('comments')) || [];

      // Remove the comment at the specified index
      storedComments.splice(index, 1);

      // Store updated comments in local storage
      localStorage.setItem('comments', JSON.stringify(storedComments));

      // Display updated comments
      displayComments();
    }

    // Add event listener to the form submit button
    const commentForm = document.getElementById('comment-form');
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      const commentInput = document.getElementById('comment-input');
      const comment = commentInput.value;

      if (comment.trim() !== '') {
        // Retrieve existing comments from local storage
        const storedComments = JSON.parse(localStorage.getItem('comments')) || [];

        // Add new comment to the array
        storedComments.push(comment);

        // Store updated comments in local storage
        localStorage.setItem('comments', JSON.stringify(storedComments));

        // Clear comment input
        commentInput.value = '';

        // Display updated comments
        displayComments();
      }
    });

    // Display comments on page load
    document.addEventListener('DOMContentLoaded', function() {
      displayComments();
    });
  