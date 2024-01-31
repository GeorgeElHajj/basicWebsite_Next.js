export default function ContactUs(){
    return(
        <div id="contact_us" class="contact-form">

        <h3>Contact Us</h3>
        <form action="#" method="post" >
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <input type="submit" value="Submit" class="btn" />
        </form>
    </div>
    );
}