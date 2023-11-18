const constants = {
    // HTTP Status Codes
    STATUS_OK: 'OK', //200
    STATUS_CREATED: 'Created', //201
    STATUS_BAD_REQUEST: 'Bad Request', //400
    STATUS_UNAUTHORIZED: 'Unauthorized', //401
    STATUS_FORBIDDEN: 'Forbidden', //403
    STATUS_NOT_FOUND: 'Not Found', //404
    STATUS_INTERNAL_SERVER_ERROR: 'Internal Server Error', //500

    // HTTP Status Codes Details Message
    STATUS_UNAUTHORIZED_DETAILS: 'Authentication credentials are missing or invalid.',
    STATUS_FORBIDDEN_DETAILS: 'You do not have the necessary permissions to access this resource.',

    // Authentication and Authorization Messages
    AUTH_UNAUTHORIZED: 'Authentication required',
    AUTH_INVALID_TOKEN: 'Invalid token',
    AUTH_ACCESS_DENIED: 'Access denied',
    AUTH_INVALID_CREDENTIALS: 'Invalid credentials',

    // User Messages
    USER_REGISTERED: 'User registered successfully',
    LOGIN_SUCCESS: 'Login successful',
    USER_UPDATED: 'User updated successfully',
    USER_DELETED: 'User deleted successfully',
    USER_NOT_FOUND: 'User not found',
    PASSWORD_UPDATED: 'Password updated successfully',

    // User Messages Failed
    USER_UPDATE_FAILED: 'User update failed.',
    USER_DELETION_FAILED: 'User deletion failed.',
    PASSWORD_UPDATE_FAILED: 'Password update failed.',

    // Event Messages
    EVENT_CREATED: 'Event created successfully',
    EVENT_UPDATED: 'Event updated successfully',
    EVENT_DELETED: 'Event deleted successfully',
    EVENT_NOT_FOUND: 'Event not found',

    // Ticket Messages
    TICKET_BOOKED: 'Ticket booked successfully',
    TICKET_CANCELLED: 'Ticket cancelled successfully',
    TICKET_NOT_FOUND: 'Ticket not found',
    TICKET_QUANTITY_EXCEEDED: 'Ticket quantity exceeded',
};

export default constants;