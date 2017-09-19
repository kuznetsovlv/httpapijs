import statuses from './statuses';

/**
 * Returns humanreadable status by it's code.
 * #params {number | string} code - statuses code.
 * #return {string} - humanreadable status.
 */
export default code => statuses[code];
