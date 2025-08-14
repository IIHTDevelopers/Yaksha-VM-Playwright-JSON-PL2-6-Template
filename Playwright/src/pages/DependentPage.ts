import { Page, Locator } from "@playwright/test";
import { test, expect } from "@playwright/test";
import TestData from "../Data/testData.json";
import path from "path";
const filePath = path.resolve(__dirname, "../../sample_upload.pdf");

export class DependentsPage {

  readonly page: Page;
  private confirmDel: Locator;
  private editname: Locator;
  private limitmsg: Locator;
  private textinput: Locator;
  readonly infoPage: Locator;
  readonly dependentsTab: Locator;
  readonly addBtn: Locator;
  readonly nameInput: Locator;
  readonly relationshipDropdown: Locator;
  readonly specifyInput: Locator;
  readonly saveBtn: Locator;
  readonly rows: Locator;
  readonly AddFile: Locator;
  readonly Browse: Locator;
  readonly CommentBox: Locator;
  readonly myinfo: Locator;

  constructor(page: Page) {

    this.page = page;
    this.confirmDel = page.locator("");
    this.editname = page.locator("");
    this.limitmsg = page.locator("");
    this.textinput = page.locator("");
    this.infoPage = page.locator("");
    this.dependentsTab = page.locator("");
    this.addBtn = page.getByRole("").first();
    this.nameInput = page.getByRole("").nth(1);
    this.relationshipDropdown = page.locator("");
    this.saveBtn = page.getByRole("");
    this.rows = page.locator("");
    this.specifyInput = page.getByRole("").nth(2);
    this.AddFile = page.getByRole("").nth(1);
    this.Browse = page.getByText("");
    this.CommentBox = page.getByRole("");
    this.myinfo = page.locator("");
  }

  async openTab() {
  }

  /**
   * Collects and returns the href attributes from the sub-tabs
   * under the "My Info" section to verify uniqueness..
  */
  async areMyInfoSubTabHrefsUnique() {
  }

  /**
   * Adds a dependent to the user's profile with the specified name and relationship.
   * If "Other" is selected as a relationship, an additional specify field is filled..
  */
  async addDependent(name: string, relation: string, otherSpecify?: string) {
  }

  /**
    * Selects "Other" from the relationship dropdown and checks if the "Specify" input becomes visible..
  */
  async selectOtherAndCheckSpecifyField() {
  }

  /**
   * Adds a dependent, edits its name, and returns the list of dependent names for verification.
  */
  async editDependentNameFlow(name: string, relation: string, editName: string, otherSpecify?: string) {
  }

  /**
    * Adds a dependent, deletes it, and returns the updated list of dependents for verification.
  */
  async deleteDependentFlow(deleteName: string) {
  }

  /**
   * Uploads an attachment with a comment and returns the list of all displayed comments.
  */
  async UploadAttachmentInDependent(comnt: string) {
  }

}
