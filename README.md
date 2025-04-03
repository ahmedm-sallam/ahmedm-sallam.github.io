# Sallam Portfolio

This is a personal portfolio project for showcasing the work, skills, and experiences of Ahmed Mohamed Sallam. The portfolio is built using a customizable configuration file and supports features like GitHub project integration, external project links, and more.

## Features

- **GitHub Projects**: Automatically or manually display GitHub repositories.
- **External Projects**: Showcase external projects with descriptions and links.
- **SEO Optimization**: Configure meta tags for better search engine visibility.
- **Social Links**: Add links to various social media platforms.
- **Resume Download**: Provide a downloadable resume link.
- **Skills and Experiences**: Highlight technical skills and professional experiences.
- **Customizable Themes**: Choose from a variety of themes or create a custom theme.
- **Blog Integration**: Display articles from Medium or Dev accounts.
- **PWA Support**: Enable Progressive Web App functionality.

## Configuration

The portfolio is configured using the `gitprofile.config.ts` file. Below are some key configuration options:

- **GitHub Username**: Set your GitHub username to fetch repositories.
- **Projects**: Configure GitHub and external projects to display.
- **SEO**: Set the title, description, and image for the portfolio.
- **Social Links**: Add links to your social media accounts.
- **Skills and Experiences**: List your skills and professional experiences.
- **Theme**: Choose a theme or define a custom theme.

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/ahmedm-sallam/sallam-portfolio.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Customize the `gitprofile.config.ts` file to match your details.

4. Start the development server:
   ```bash
   npm start
   ```

5. Build for production:
   ```bash
   npm run build
   ```

6. Deploy the portfolio to your preferred hosting platform.

## Deployment

To deploy the portfolio, ensure the `base` property in the configuration file is set correctly based on your hosting URL. For example:
- For `https://<USERNAME>.github.io/`, set `base: '/'`.
- For `https://<USERNAME>.github.io/<REPO_NAME>/`, set `base: '/<REPO_NAME>/'`.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, you can reach out via:
- **Email**: AhmedM.SallamIbrahim@Gmail.com
- **LinkedIn**: [ahmedm-sallam](https://www.linkedin.com/in/ahmedm-sallam/)
