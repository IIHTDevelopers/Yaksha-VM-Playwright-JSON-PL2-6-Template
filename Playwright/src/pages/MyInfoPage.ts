import { Locator, Page } from "@playwright/test";
import path from "path";
import LoginPage from "./LoginPage";
const filePath = path.resolve(__dirname, "../../sample_upload.pdf");

export class MyInfoPage {

  readonly page: Page;
  private textinput: Locator;
  private addFile: Locator;
  private contactBtn: Locator;
  private saveBtn: Locator;
  private Myinfo: Locator;
  private nameField: Locator;
  private spanMsg: Locator;
  private saveButton: Locator;
  private membershipTab: Locator;
  private addBtn: Locator;
  private dropdwn: Locator;
  private amount: Locator;
  private deletecnfrm: Locator;
  private table: Locator;
  private uploadedFile: Locator;
  private addCmnt: Locator;
  private ImmigrationTab: Locator;
  private psprtNumber: Locator;
  private checkboxDel: Locator;
  private qualificationTab: Locator;

  constructor(page: Page) {

    this.page = page;
    this.qualificationTab = page.locator("");
    this.checkboxDel = page.locator("");
    this.psprtNumber = page.locator("");
    this.ImmigrationTab = page.locator("");
    this.addCmnt = page.locator("");
    this.uploadedFile = page.locator("");
    this.table = page.locator("");
    this.deletecnfrm = page.locator("");
    this.amount = page.locator("");
    this.dropdwn = page.locator("");
    this.addBtn = page.locator("");
    this.membershipTab = page.locator("");
    this.saveButton = page.locator("");
    this.nameField = page.locator("");
    this.spanMsg = page.locator("");
    this.textinput = page.locator("");
    this.addFile = page.locator("");
    this.contactBtn = page.locator("");
    this.Myinfo = page.locator("");
    this.saveBtn = page.locator("");
  }

  /**
    * Uploads an attachment with a given comment in the My Info > Contact Details section.
    *
    * @param comnt - A unique comment to associate with the uploaded file.
    * @returns A list of text entries matching the uploaded comments (post-upload).
  */
  async UploadAttachmentInDependent(comnt: string) {
  }

  /**
    * Navigates to the "My Info" tab and returns the current page URL..
  */
  async clickMyInfoTab() {
  }

  /**
   * Clears the name field and returns validation message, if any..
  */
  async clearAndEnterName() {
  }

  /**
   * Updates the user's name in the "My Info" tab and returns the profile name after saving and reloading..
  */
  async updateUniqueNAmeAndVerifyName(newName: string) {
  }

  /**
   * Adds a membership with the given amount and returns all amounts from the list.
  */
  async addMembership(amount: string) {
  }

  /**
   * Adds and then deletes a membership with the given amount.
   * Returns all membership amounts after deletion.
  */
  async deleteMembership(amount: string) {
  }

  /**
   * Edits the first membership and updates it with the given amount.
   * Returns all membership amounts after editing.
  */
  async editMembership(newAmount: string) {
  }

  /**
   * Uploads an attachment with the given comment in the Memberships subtab.
   * Returns all comments from the attachment list.
  */
  async addmembershipAttach(cmnt: string) {
  }

  /**
   * Adds an immigration record with the given passport number.
   * Returns all passport numbers from the immigration list.
  */
  async addImegration(PPn: string) {
  }

  /**
   * Edits the first immigration record and updates it with the given passport number.
   * Returns all passport numbers from the immigration list.
  */
  async editImmigration(Uppn: string) {
  }

  /**
   * Adds and then deletes an immigration record with the given passport number.
   * Returns all passport numbers from the immigration list after deletion.
  */
  async deleteImmegration(PPn: string) {
  }

  // Navigates to My Info > Qualification tab and returns the page URL
  async qualificationTabb() {
  }

  /**
   * Adds a new immigration record, selects it via checkbox, and deletes it.
   * Returns all passport numbers from the list after deletion.
  */
  async checkboxDeleteFunction(PPn: string) {
  }

}
