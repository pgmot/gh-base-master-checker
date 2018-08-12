
import * as $ from 'jquery';

function isOpenPullRequest(): boolean {
    return $('div.State.State--green').length > 0;
}

function isBaseBranchMaster(): boolean {
    return $('span.base-ref > span')[0].textContent === "master";
};

function isAlreadyAddedWarningMessage(): boolean {
    return $('div.gbmc-warning-message').length > 0;
}

function addWarningMessage(): void {
    const messageDiv = $('<div class="gbmc-warning-message" style="color: red; font-weight: 900;">This Pull Request is not merge to master!!!!</div>');
    $('div.merge-message').css("background", "red");
    $('div.branch-action-body').append(messageDiv);
};

let timer = null;
$(document).on('DOMNodeInserted', () => {
    const urlRegexp = /https:\/\/github\.com\/(.*)\/pull\//;

    if (!location.href.match(urlRegexp)) {
        return;
    }

    if (!isOpenPullRequest()) {
        return;
    }

    if (isAlreadyAddedWarningMessage()) {
        return;
    }

    if (!isBaseBranchMaster()) {
        addWarningMessage();
    }
});
