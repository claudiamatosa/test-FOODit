describe('Filter: truncate', function() {

  beforeEach(module('jstestApp'));

  it('should return a truncated string with the last word',
    inject(function(truncateFilter) {

      expect(truncateFilter('some string some string', 6)).toEqual('some string');
    })
  );
  
  it('should the entire string when the limit is larger than the string',
    inject(function(truncateFilter) {

      expect(truncateFilter('some string some string', 60)).toEqual('some string some string');
    })
  );
});