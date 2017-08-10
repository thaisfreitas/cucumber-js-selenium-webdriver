Feature:
  As people support person
  I want to create a hire
  So that I can have an user's data on PSHR

  Scenario: Create hire
    Given I am logged into PSHR
    And A new set of user credentials
    When I hire a new employee
    Then The user can be found in PSHR
    Then a corresponding "hire" event is detected
    Then a corresponding "userIdChange" event is detected
