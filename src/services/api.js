const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

/**
 * Submits the contact form data to the backend.
 * @param {Object} data - The form data (fullName, email, companyName, country, message).
 * @returns {Promise<Object>} - The response data.
 */
export const submitContactForm = async (data) => {
    try {
        const response = await fetch(`${API_BASE_URL}/Submission`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(errorData || 'Failed to submit form');
        }

        return await response.json();
    } catch (error) {
        console.error('Error submitting contact form:', error);
        throw error;
    }
};
