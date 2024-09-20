import { strict as assert } from 'assert';
import { execSync } from 'child_process';
import { describe, it } from 'node:test';

void describe('Emmett CLI Integration Tests', () => {
  void it('should run emmett CLI and execute plugin commands', () => {
    // Run the Emmett CLI command using execSync
    const result = execSync(
      `emmett migrate run --config --connectionString postgres://user:pass@localhost/test`,
      { encoding: 'utf-8' },
    );

    // Assertions
    assert(
      result.includes('Nothing has happened, but test was successful'),
      'Expected success message not found in stdout',
    );
  });
});