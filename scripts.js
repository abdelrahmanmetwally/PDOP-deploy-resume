document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
        date: 'Mar 2023 - Present',
        title: 'DevOps engineer',
        description: 'At BBI.ai ., Install, configure and support Informatica and confluent Platform , install and configure prometheus and grafana'
    },
    {
        date: 'Jan 2023 - Feb 2023',
        title: 'Trainee at Ivolve',
        description: 'It was a chance to have more hands-on experience in DevOps tools and implementing projects.'
    }
];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});
