'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	GradApplication = mongoose.model('GradApplication');

/**
 * Globals
 */
var user, gradApplication;

/**
 * Unit tests
 */
describe('GradApplication Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		user.save(function() { 
			gradApplication = new GradApplication({
				name: 'GradApplication Name',
				user: user
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return gradApplication.save(function(err) {
				should.not.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) { 
		GradApplication.remove().exec();
		User.remove().exec();

		done();
	});
});
