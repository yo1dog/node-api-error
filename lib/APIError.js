const http            = require('http');
const ExtendableError = require('@yo1dog/extendable-error');


class APIError extends ExtendableError {
  /**
   * @param {number} status 
   * @param {string} [message] 
   * @param {object} [options ]
   * @param {string} [options.code]
   * @param {any}    [options.details]
   */
  constructor(status, message, {code, details} = {}) {
    if (!message) {
      message = http.STATUS_CODES[status] || 'Unknown';
    }
    
    super(message);
    this.setUnenumerable('status',  status );
    this.setUnenumerable('code',    code   );
    this.setUnenumerable('details', details);
  }
}

module.exports = APIError;