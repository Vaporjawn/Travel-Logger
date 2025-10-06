# Security Policy

## Supported Versions

We release patches for security vulnerabilities in the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

The Travel Logger team takes security bugs seriously. We appreciate your efforts to responsibly disclose your findings, and will make every effort to acknowledge your contributions.

### How to Report a Security Vulnerability?

To report a security issue, please use the GitHub Security Advisory "Report a Vulnerability" tab.

Alternatively, you can email us directly at victor.williams.dev@gmail.com with the subject line "SECURITY: [Brief Description]".

The Travel Logger team will send a response indicating the next steps in handling your report. After the initial reply to your report, the security team will keep you informed of the progress towards a fix and full announcement, and may ask for additional information or guidance.

### What to Include in Your Report

Please include the following information along with your report:

- Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

### Preferred Languages

We prefer all communications to be in English.

### Policy

- We will respond to your report within 72 hours with our evaluation of the report and an expected resolution date.
- If you have followed the instructions above, we will not take any legal action against you in regard to the report.
- We will handle your report with strict confidentiality, and not pass on your personal details to third parties without your permission.
- We will keep you informed of the progress towards resolving the problem.
- In the public disclosure, we will give your name as the discoverer of the problem (unless you desire otherwise).

### Security Updates

Security updates will be released as patch versions and will be clearly marked in the changelog. We recommend always using the latest version of Travel Logger.

### Security Best Practices for Users

#### API Key Security
- **Never commit API keys to version control**
- **Use environment variables** for all sensitive configuration
- **Rotate API keys regularly**
- **Use different API keys for development and production**

#### Database Security
- **Use strong authentication** for MongoDB connections
- **Enable MongoDB authentication** in production
- **Use MongoDB Atlas** for managed security in cloud deployments
- **Regularly backup your data**

#### Server Security
- **Use HTTPS** in production
- **Keep dependencies updated** (use `npm audit` regularly)
- **Implement proper rate limiting**
- **Use a reverse proxy** (nginx, Apache) in production
- **Enable security headers** (already included via Helmet.js)

#### Client Security
- **Validate user input** on both client and server
- **Sanitize data** before displaying
- **Use Content Security Policy** headers
- **Keep Mapbox tokens secure** and use URL restrictions when possible

### Known Security Considerations

#### Current Security Measures

1. **API Key Authentication**: All POST requests require a valid API key
2. **Rate Limiting**: POST requests are limited to 1 per 10 seconds per IP
3. **Helmet.js**: Security headers are automatically applied
4. **CORS**: Cross-origin requests are properly configured
5. **Input Validation**: Mongoose schema validation prevents malformed data

#### Areas for Enhancement

- **User Authentication**: Currently, the app uses API key authentication. Consider implementing OAuth2 or JWT-based user authentication for production use.
- **Data Encryption**: Consider encrypting sensitive data at rest
- **Audit Logging**: Implement comprehensive audit logging for security events
- **Input Sanitization**: Add additional input sanitization for user-generated content

### Security Checklist for Contributors

When contributing to Travel Logger, please ensure:

- [ ] No hardcoded secrets or API keys in code
- [ ] Input validation is implemented for new endpoints
- [ ] Dependencies are up to date and have no known vulnerabilities
- [ ] New features follow the principle of least privilege
- [ ] Error messages don't leak sensitive information
- [ ] Authentication and authorization are properly implemented

### Contact

For any security-related questions or concerns, please contact:

**Victor Williams**
Email: victor.williams.dev@gmail.com
GitHub: [@Vaporjawn](https://github.com/Vaporjawn)

---

**Remember**: If you discover a security vulnerability, please follow responsible disclosure practices and contact us privately before making any public announcements.