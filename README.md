To-do

1. Auth - Done✅
2. Create schemas for: Forms, Questions, Users, responses, and answers - Done✅
3. Create Routes:
    1. Create a form: POST /form - Done✅
    2. Add a question to a form: normal questions go with just question and tyepe, while advanced questions go with options and other details: POST /forms/questions/:formId
    2. Update a questions in a form: PATCH /forms/questions/:formId/:questionId
    3. Get form content(questions and responses): GET /forms/:formId
    4. Updating a form: PATCH /forms/:formId
    5. Deleting a form: DELETE /forms/:formId
    6. Clone a form: POST /forms/clone/:formId
    5. Get all forms with names, No. of entries filled: GET /forms
    6. Create a response to a form: Add answers to questions in a form: POST /forms/responses/:formId
    7. Get all responses to a form: GET /forms/responses/:formId
    6. Integration with sheets/notionDbs: Create a google sheet for the form (Google API) -> store sheet ID in the form:  POST /forms/integrations/google-sheets/forms/:formId, POST /forms/integrations/notion/:formId
    7. Payment to use notionDB integration: POST /forms/integrations/notion/payments/:formId
    8. Publishing the form on a link:
4. Frontend:
    1. Landing Page
    2. Dashboard page
    3. Create form popup
    4. Notion like UI with commands to create forms
    5. List of Integrations to add integrations to form
    6. Billing page
5. Deployement
6. Payment Gateway Integration(Most probably Razorpay)