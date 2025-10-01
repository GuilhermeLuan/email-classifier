import unittest
from unittest.mock import patch, Mock
from src.app import app
from src.services.classifier_service import classify_email, response_to_email, get_classify_prompt, get_response_prompt

class TestEmailClassifier(unittest.TestCase):

    @patch('src.services.classifier_service.genai.GenerativeModel')
    @patch('src.services.classifier_service.os.getenv')
    def test_classify_email_success(self, mock_getenv, MockGenerativeModel):
        mock_getenv.return_value = "FakeAPIKey"
        mock_model_instance = Mock()
        mock_model_instance.generate_content.return_value = Mock(text="Productive")
        MockGenerativeModel.return_value = mock_model_instance

        test_data = {'email': 'This is a test email.'}
        result = classify_email(test_data)

        self.assertEqual(result, {"message": "Productive"})

        expected_prompt = get_classify_prompt().format(email_to_classify=test_data['email'])
        mock_model_instance.generate_content.assert_called_once_with(expected_prompt)